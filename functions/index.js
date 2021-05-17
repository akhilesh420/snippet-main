const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const path = require('path');
const os = require('os');
const fs = require('fs');
const spawn = require('child-process-promise').spawn;

const runtimeOpts = {
  timeoutSeconds: 540,
  memory: '512MB'
}

const runtimeOpts_content = {
  timeoutSeconds: 540,
  memory: '1GB'
}


// const bucket_name = 'snippet-web-9818a.appspot.com'; //snippet production
const bucket_name = 'snippet-test2.appspot.com'; //snippet testing


exports.deleteUser = functions.https.onCall(async (data, context) => {

  try {
    const uid = data.uid;
    functions.logger.info('Deleting user with uid:', uid);

    await admin
    .auth()
    .deleteUser(uid)
    .then(() => {
      functions.logger.info('Successfully deleted user');
      return 'Successfully deleted user';
    })
    .catch((error) => {
      functions.logger.info('Error deleting user:', error);
      return 'Error deleting user:'+ error;
    });
  } catch(e) {
    functions.logger.info(e);
  }
});

exports.createAdmin = functions.https.onCall(async (data, context) => {

  try {
    const uid = data.uid;
    functions.logger.info('Creating admin with uid:', uid);

    await admin
    .auth()
    .setCustomUserClaims(uid, {admin: true})
    .then(() => {
      functions.logger.info('Successfully created admin');
      return { message: 'success'};
    })
    .catch((error) => {
      functions.logger.info('Error creating admin:', error);
      return  { message: 'Error creating admin:' + error};
    });
  } catch(e) {
    functions.logger.info(e);
  }
});

exports.deletePost = functions.https.onCall(async (data, context) => {

  const uid = data.uid;
  const pid = data.pid;
  let isAdmin = false;
  let message = 'Post deleted by user';

  return new Promise(async (resolve, reject) => {
    // Lookup the user associated with the specified uid.
    await admin
      .auth()
      .getUser(uid)
      .then(async (userRecord) => {
        // The claims can be accessed on the user record.
        if (!!userRecord.customClaims && userRecord.customClaims['admin'] == true) {
          // Allow access to requested admin resource.
          functions.logger.info('User is admin');
          isAdmin = true;
          message = 'Post deleted for violating community guidelines'
        } else {
          await admin.firestore()
            .collection('posts')
            .doc(pid)
            .get()
            .then(res => {
              functions.logger.info('post data', res);
              if (res.creatorId != uid) reject("You don't have access");
            });
        }
      });

    functions.logger.info('Done');
    resolve('success');
  })
  .then((val) => {return {message: val}})
  .catch((e) =>{return {message: e}});
});

exports.contentCreate = functions.runWith(runtimeOpts_content).firestore
.document('post content/{pid}')
.onCreate(async (snap, context) => {

  const fileBucket = bucket_name;

  const newValue = snap.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;
  const dimensions = {width: newValue.width.toString(), height: newValue.height.toString()};

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  const filePath = 'posts/' + fileName + '/original';
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);

  await bucket.file(filePath).download({destination: tempFilePath})
              .catch((e) => functions.logger.info(e));

  functions.logger.info('File downloaded locally to', tempFilePath);

  let args = [];
  let command = '';
  if (contentType.startsWith('image/gif')) {
    outputFilePath =  path.join(os.tmpdir(), 'optimized.gif');
    command = 'convert';
    args = ['-auto-orient',
            '-strip',
            '-coalesce',
            '-sampling-factor',
            '4:2:0',
            '-quality',
            '85',
            '-interlace',
            'Plane',
            '-colorspace',
            'RGB',
            tempFilePath,
            outputFilePath];
  } else if (contentType.startsWith('image/')) {
    outputFilePath =  path.join(os.tmpdir(), 'optimized.jpeg');
    command = 'convert';
    args = ['-auto-orient',
            '-strip',
            '-sampling-factor',
            '4:2:0',
            '-quality',
            '85',
            '-interlace',
            'Plane',
            '-gaussian-blur',
            '0.05',
            '-colorspace',
            'RGB',
            tempFilePath,
            outputFilePath];
  } else if (contentType.startsWith('video/')) {
    outputFilePath =  path.join(os.tmpdir(), 'optimized.mp4');
    command = 'ffmpeg';
    args = ['-i',
            tempFilePath,
            '-c',
            'copy',
            '-map',
            '0',
            '-movflags',
            '+faststart',
            outputFilePath];
  } else {
    return functions.logger.info('Unsupported file type');
  }

  unlinkPaths = [tempFilePath, outputFilePath];

  functions.logger.info('started processing', command, args);
  await spawn(command, args).catch((e) => functions.logger.info(e));
  functions.logger.info('finished processing');
  functions.logger.info('uploading to storage', filePath);

  const _metadata = { contentType: contentType, cacheControl: 'public, max-age=31536000', metadata: dimensions};
  await bucket.upload(outputFilePath, { destination: filePath, metadata: _metadata})
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage with metadata', _metadata);
  finishUp(unlinkPaths);
});

exports.stickerCreate = functions.runWith(runtimeOpts).firestore
.document('sticker content/{pid}')
.onCreate(async (snap, context) => {

  const fileBucket = bucket_name;

  const newValue = snap.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;
  const width = newValue.width;
  const height = newValue.height;

  const dimension = '150'; //Required size for small image

  const dimensions = getDimensions(width, height, dimension);

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  let filePath = 'stickers/' + fileName + '/original';
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  let outputFilePath1 = '';
  let outputFilePath2 = '';

  await bucket.file(filePath).download({destination: tempFilePath})
          .catch((e) => functions.logger.info(e));

  functions.logger.info('File downloaded locally to', tempFilePath);

  filePath = 'stickers/' + fileName + '/small';

  if (contentType.startsWith('image/gif')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.gif');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.gif');
  } else if (contentType.startsWith('image/')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.jpeg');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.jpeg');
  } else {
    return functions.logger.info('Unsupported file type');
  }

  const args1 = ['-i',
                  tempFilePath,
                  '-vf',
                  'scale=w=' + dimension + ':h=' + dimension + ':force_original_aspect_ratio=increase',
                  outputFilePath1];

  const args2 = ['-auto-orient',
                 '-strip',
                 '-interlace',
                 'Plane',
                 '-colorspace',
                 'RGB',
                 outputFilePath1,
                 outputFilePath2];

  const unlinkPaths = [tempFilePath, outputFilePath1, outputFilePath2];

  functions.logger.info('started processing ffmpeg', args1);
  await spawn('ffmpeg', args1).catch((e) => functions.logger.info(e));
  functions.logger.info('finished processing ffmpeg');
  functions.logger.info('started processing convert', args2);
  await spawn('convert', args2).catch((e) => functions.logger.info(e));
  functions.logger.info('finished processing convert');
  functions.logger.info('uploading to storage', filePath);

  const _metadata = { contentType: contentType, cacheControl: 'public, max-age=31536000', metadata: dimensions};
  await bucket.upload(outputFilePath2, { destination: filePath, metadata: _metadata})
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage with metadata', _metadata);
  finishUp(unlinkPaths);
});

exports.dpCreate = functions.runWith(runtimeOpts).firestore
.document('display picture/{uid}')
.onWrite(async (change, context) => {

  const fileBucket = bucket_name;

  const newValue = change.after.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;
  const width = newValue.width;
  const height = newValue.height;

  const dimension = '200'; //Required size for small image

  const dimensions = getDimensions(width, height, dimension);

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  let outputFilePath1 = '';
  let outputFilePath2 = '';

  if (contentType.startsWith('image/gif')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.gif');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.gif');
  } else if (contentType.startsWith('image/')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.jpeg');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.jpeg');
  } else {
    return functions.logger.info('Unsupported file type');
  }

  let filePath = 'display pictures/' + fileName + '/original';
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);

  await bucket.file(filePath).download({destination: tempFilePath})
          .catch((e) => functions.logger.info(e));

  functions.logger.info('File downloaded locally to', tempFilePath);

  filePath = 'display pictures/' + fileName + '/small';

  const args1 = ['-i',
                  tempFilePath,
                  '-vf',
                  'scale=w=' + dimension + ':h=' + dimension + ':force_original_aspect_ratio=increase',
                  outputFilePath1];

  const args2 = ['-auto-orient',
                 '-strip',
                 '-interlace',
                 'Plane',
                 '-colorspace',
                 'RGB',
                 outputFilePath1,
                 outputFilePath2];

  const unlinkPaths = [tempFilePath, outputFilePath1, outputFilePath2];

  functions.logger.info('started processing ffmpeg', args1);
  await spawn('ffmpeg', args1).catch((e) => functions.logger.info(e));
  functions.logger.info('finished processing ffmpeg');
  functions.logger.info('started processing convert', args2);
  await spawn('convert', args2).catch((e) => functions.logger.info(e));
  functions.logger.info('finished processing convert');
  functions.logger.info('uploading to storage', filePath);

  const _metadata = { contentType: contentType, cacheControl: 'public, max-age=31536000', metadata: dimensions};
  await bucket.upload(outputFilePath2, { destination: filePath, metadata: _metadata})
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage with metadata', _metadata);
  finishUp(unlinkPaths);
});

function getDimensions(width, height, dimension) {
  if (width == 0 || height == 0) return;
  var _dimensions;
  if (width > height) _dimensions  = {width: dimension * (width/height), height: dimension};
  _dimensions = {width: dimension, height: dimension * (height/width)};
  return {width: _dimensions.width.toString(), height: _dimensions.height.toString()};
}

function finishUp(unlinkPaths) {
  unlinkPaths.forEach((filePath) => fs.unlinkSync(filePath));
  functions.logger.info('Finished execution');
}



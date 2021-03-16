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

exports.contentCreate = functions.runWith(runtimeOpts_content).firestore
.document('post content/{pid}')
.onCreate(async (snap, context) => {

  const fileBucket = bucket_name;

  const newValue = snap.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;
  const dimensions = {width: newValue.width, height: newValue.height};

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

  await bucket.upload(outputFilePath, { destination: filePath, metadata: { contentType: contentType, ...dimensions} })
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage');
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

  filePath = 'Post/' + `sm_${fileName}`;

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

  await bucket.upload(outputFilePath2, { destination: filePath, metadata: { contentType: contentType, ...dimensions} })
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage');
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

  filePath = 'Display picture/' + `sm_${fileName}`;

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

  await bucket.upload(outputFilePath2, { destination: filePath,
                                         metadata: { contentType: contentType, ...dimensions} })
          .catch((e) => functions.logger.info(e));
  functions.logger.info('uploaded to storage');
  finishUp(unlinkPaths);
});

function getDimensions(width, height, dimension) {
  if (width == 0 || height == 0) return;
  if (width > height) return {width: dimension * (width/height), height: dimension};
  return {width: dimension, height: dimension * (height/width)};
}

function finishUp(unlinkPaths) {
  unlinkPaths.forEach((filePath) => fs.unlinkSync(filePath));
  functions.logger.info('Finished execution');
}



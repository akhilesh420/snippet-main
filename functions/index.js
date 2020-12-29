const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const path = require('path');
const os = require('os');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const spawn = require('child-process-promise').spawn;
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const runtimeOpts = {
  timeoutSeconds: 540,
  memory: '512MB'
}

exports.contentCreate = functions.runWith(runtimeOpts).firestore
  .document('post content/{pid}')
  .onCreate(async (snap, context) => {

    const fileBucket = 'snippet-test-716cd.appspot.com';

    const newValue = snap.data();
    const fileName = newValue.name;
    const contentType = newValue.fileFormat;

    functions.logger.info('File name:', fileName);
    functions.logger.info('File type:', contentType);

    const filePath = 'Post/' + fileName;
    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);

    await bucket.file(filePath).download({destination: tempFilePath});

    functions.logger.info('File downloaded locally to', tempFilePath);

    if (contentType.startsWith('image/gif')) {
      const outputFilePath =  path.join(os.tmpdir(), 'optimized.gif');
      await gif_processing(bucket, outputFilePath, tempFilePath, filePath);
    } else if (contentType.startsWith('image/')) {
      const outputFilePath =  path.join(os.tmpdir(), 'compressed.jpeg');
      await imageMagick_processing(bucket, outputFilePath, tempFilePath, filePath);
    } else if (contentType.includes('video/')) {
      const outputFilePath =  path.join(os.tmpdir(), 'faststarted.mp4');
      const args = ['-movflags +faststart'];
      await ffmpeg_processing(tempFilePath, outputFilePath, bucket, filePath,args);
    }

    finishUp([tempFilePath,outputFilePath]);

  });

exports.stickerCreate = functions.runWith(runtimeOpts).firestore
.document('sticker content/{pid}')
.onCreate(async (snap, context) => {

  const fileBucket = 'snippet-test-716cd.appspot.com';

  const newValue = snap.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  const filePath = 'Post/' + fileName;
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  let outputFilePath1 = '';
  let outputFilePath2 = '';

  await bucket.file(filePath).download({destination: tempFilePath});

  functions.logger.info('File downloaded locally to', tempFilePath);

  const dimension = '250';
  const size = dimension + 'x' + dimension + '^';
  filePath = filePath + '_sm';

  if (contentType.startsWith('image/gif')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.gif');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.gif');
    // var args = ['-coalesce',
    //             '-resize',
    //             size,
    //             '-deconstruct',
    //             '-sampling-factor',
    //             '4:2:0',
    //             '-strip',
    //             '-quality',
    //             '85',
    //             '-interlace',
    //             'Plane']
    outputFilePath =  path.join(os.tmpdir(), 'optimized.gif');
  } else if (contentType.startsWith('image/')) {
    // var args = ['-sampling-factor',
    //             '4:2:0',
    //             '-strip',
    //             '-quality',
    //             '85',
    //             '-interlace',
    //             'Plane',
    //             '-gaussian-blur',
    //             '0.05',
    //             '-colorspace',
    //             'RGB',
    //             '-resize',
    //             size];


    outputFilePath1 =  path.join(os.tmpdir(), 'resized.jpeg');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.jpeg');
  }

  const args1 = ['-vf scale=w='+ dimension + ':h=' + dimension + ':force_original_aspect_ratio=decrease'];

  const args2 = ['-strip','-interlace','Plane','-colorspace','RGB'];

  await ffmpeg_processing(tempFilePath, outputFilePath1, args1)
        .catch(error => functions.logger.info('An error occurred while resizing', error));

  await imageMagick_processing(outputFilePath1, outputFilePath2, args2)
        .catch(error => functions.logger.info('An error occurred while optimizing', error));

  await uploadToStorage(bucket, outputFilePath, filePath);

  finishUp([tempFilePath, outputFilePath]);
});

exports.dpCreate = functions.runWith(runtimeOpts).firestore
.document('display picture/{uid}')
.onWrite(async (change, context) => {

  const fileBucket = 'snippet-test-716cd.appspot.com';

  const newValue = change.after.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  let filePath = 'Display picture/' + fileName;
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  let outputFilePath1 = '';
  let outputFilePath2 = '';

  await bucket.file(filePath).download({destination: tempFilePath});

  functions.logger.info('File downloaded locally to', tempFilePath);

  const dimension = '200';
  const size = dimension + 'x' + dimension + '^';
  filePath = filePath + '_sm';

  if (contentType.startsWith('image/gif')) {
    outputFilePath1 =  path.join(os.tmpdir(), 'resized.gif');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.gif');
    // var args = ['-coalesce',
    //             '-resize',
    //             size,
    //             '-deconstruct',
    //             '-sampling-factor',
    //             '4:2:0',
    //             '-strip',
    //             '-quality',
    //             '85',
    //             '-interlace',
    //             'Plane']
  } else if (contentType.startsWith('image/')) {
    // var args = ['-sampling-factor',
    //             '4:2:0',
    //             '-strip',
    //             '-quality',
    //             '85',
    //             '-interlace',
    //             'Plane',
    //             '-gaussian-blur',
    //             '0.05',
    //             '-colorspace',
    //             'RGB',
    //             '-resize',
    //             size];


    outputFilePath1 =  path.join(os.tmpdir(), 'resized.jpeg');
    outputFilePath2 =  path.join(os.tmpdir(), 'optimized.jpeg');
  }

  const args1 = ['-i',
                  tempFilePath,
                  '-vf',
                  'scale=w=' + dimension + ':h=' + dimension + ':force_original_aspect_ratio=decrease',
                  outputFilePath1];

  const args2 = ['-strip','-interlace','Plane','-colorspace','RGB', outputFilePath1, outputFilePath2];

  await file_processing('ffmpeg', args1);

  // await file_processing('convert', args2)
  //       .catch(error => functions.logger.info('An error occurred while optimizing', error));

  await uploadToStorage(bucket, outputFilePath1, filePath);

  finishUp([tempFilePath, outputFilePath]);
});

function ffmpeg_processing(inputFilePath, outputFilePath, args) {
  return new Promise(async (resolve, reject) => {
    await ffmpeg(inputFilePath)
    .setFfmpegPath(ffmpegPath)
    .outputOptions(args)
    .output(outputFilePath)
    .on('error', (err, stdout, stderr) => {
      functions.logger.info('An error occurred', err, stdout, stderr);
    })
    .on('start', (commandLine) => functions.logger.info('started processing with ffmpeg: ', commandLine))
    .on('end', async (filenames) => {
      functions.logger.info('finished processing: ', filenames);
      // await uploadToStorage(bucket, outputFilePath, filePath);
    })
    .run();
  });
};

function imageMagick_processing(inputFilePath, outputFilePath, args) {
  return new Promise( async (resolve, reject) => {
    functions.logger.info('started image processing');
    functions.logger.info(args);
    await spawn('convert', args)
          .catch((error) => functions.logger.info('Spawn failed:', error));
    functions.logger.info('finished image processing');
    // await uploadToStorage(bucket, outputFilePath, filePath, unlinkPaths);
  });
}

function file_processing(command, args) {
  return new Promise( async (resolve, reject) => {
    functions.logger.info('started processing:', command);
    functions.logger.info(args);
    await spawn(command, args);
    functions.logger.info('finished processing');
    // await uploadToStorage(bucket, outputFilePath, filePath, unlinkPaths);
  });
}

function uploadToStorage(bucket, outputFilePath, filePath, unlinkPaths) {
  return new Promise(async (resolve, reject) => {
    functions.logger.info('uploading to storage');
    await bucket.upload(outputFilePath, { destination: filePath });
  });
}

function finishUp(unlinkPaths) {
  unlinkPaths.forEach((filePath) => fs.unlinkSync(filePath));
  functions.logger.info('Finished execution');
}

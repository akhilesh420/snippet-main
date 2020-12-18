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
  memory: '2GB'
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
      await image_processing(bucket, outputFilePath, tempFilePath, filePath);
    } else if (contentType.includes('video/')) {
      const outputFilePath =  path.join(os.tmpdir(), 'faststarted.mp4');
      await faststart(tempFilePath, outputFilePath, bucket, filePath);
    }
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

  await bucket.file(filePath).download({destination: tempFilePath});

  functions.logger.info('File downloaded locally to', tempFilePath);

  if (contentType.startsWith('image/gif')) {
    const outputFilePath =  path.join(os.tmpdir(), 'optimized.gif');
    await gif_processing(bucket, outputFilePath, tempFilePath, filePath);
  } else if (contentType.startsWith('image/')) {
    const outputFilePath =  path.join(os.tmpdir(), 'compressed.jpeg');
    await image_processing(bucket, outputFilePath, tempFilePath, filePath);
  }
});

exports.dpCreate = functions.runWith(runtimeOpts).firestore
.document('display picture/{uid}')
.onCreate(async (snap, context) => {

  const fileBucket = 'snippet-test-716cd.appspot.com';

  const newValue = snap.data();
  const fileName = newValue.name;
  const contentType = newValue.fileFormat;

  functions.logger.info('File name:', fileName);
  functions.logger.info('File type:', contentType);

  const filePath = 'Display picture/' + fileName;
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);

  await bucket.file(filePath).download({destination: tempFilePath});

  functions.logger.info('File downloaded locally to', tempFilePath);

  if (contentType.startsWith('image/gif')) {
    const outputFilePath =  path.join(os.tmpdir(), 'optimized.gif');
    await gif_processing(bucket, outputFilePath, tempFilePath, filePath);
  } else if (contentType.startsWith('image/')) {
    const outputFilePath =  path.join(os.tmpdir(), 'compressed.jpeg');
    await image_processing(bucket, outputFilePath, tempFilePath, filePath);
  }
});

function faststart(tempFilePath, outputFilePath, bucket, filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg(tempFilePath)
    .setFfmpegPath(ffmpegPath)
    .outputOptions(['-movflags +faststart'])
    .output(outputFilePath)
    .on('error', (err, stdout, stderr) => {
      functions.logger.info('An error occurred', err, stdout, stderr);
      fs.unlinkSync(outputFilePath);
      return fs.unlinkSync(tempFilePath);
    })
    .on('start', (commandLine) => functions.logger.info('started video processing for faststart: ', commandLine))
    .on('end', async (filenames) => {
      functions.logger.info('finished video processing: ', filenames);
      await uploadToStorage(bucket, outputFilePath, tempFilePath, filePath);
    })
    .run();
  });
};

function image_processing(bucket, outputFilePath, tempFilePath, filePath) {
  return new Promise( async (resolve, reject) => {
    functions.logger.info('started image processing');
    await spawn('convert', ['-sampling-factor','4:2:0', '-strip', '-quality', '85', '-interlace', 'Plane', '-gaussian-blur', '0.05', '-colorspace', 'RGB', tempFilePath, outputFilePath]);
    await uploadToStorage(bucket, outputFilePath, tempFilePath, filePath);
  });
}

function gif_processing(bucket, outputFilePath, tempFilePath, filePath) {
  return new Promise( async (resolve, reject) => {
    functions.logger.info('started gif processing');
    await spawn('convert', ['-sampling-factor','4:2:0', '-strip', '-quality', '85', '-interlace', 'Plane', tempFilePath, outputFilePath]);
    await uploadToStorage(bucket, outputFilePath, tempFilePath, filePath);
  });
}

function uploadToStorage(bucket, outputFilePath, tempFilePath, filePath) {
  return new Promise((resolve, reject) => {
    bucket.upload(outputFilePath, {
      destination: filePath
    })
    .then(() => {
      functions.logger.info('Successfully uploaded to storage');
      })
    .catch((error) => functions.logger.info('Failed to upload to storage', error))
    .finally(() => {
      functions.logger.info('Finished execution');
      fs.unlinkSync(outputFilePath);
      return fs.unlinkSync(tempFilePath);
    });
  });
}

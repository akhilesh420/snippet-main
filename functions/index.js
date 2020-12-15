const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const path = require('path');
const os = require('os');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path

const runtimeOpts = {
  timeoutSeconds: 540,
  memory: '2GB'
}

exports.postCreate = functions.runWith(runtimeOpts).firestore
  .document('post content/{pid}')
  .onCreate(async (snap, context) => {

    const fileBucket = 'snippet-test-716cd.appspot.com';

    const newValue = snap.data();
    const fileName = newValue.name;
    const contentType = newValue.fileFormat;

    functions.logger.info('File name:', fileName);

    if (!contentType.includes('video')) {
      functions.logger.info('File skipped because file type:', contentType);
      return null;
    }

    const filePath = 'Post/' + fileName;
    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const outputFilePath =  path.join(os.tmpdir(), 'faststarted.mp4');

    await bucket.file(filePath).download({destination: tempFilePath})

    functions.logger.info('File downloaded locally to', tempFilePath);

    await faststart(tempFilePath, outputFilePath, bucket, filePath);
  });

  function faststart(tempFilePath, outputFilePath, bucket, filePath) {
    return new Promise((resolve,reject) => {
      ffmpeg(tempFilePath)
      .setFfmpegPath(ffmpegPath)
      .outputOptions(['-movflags +faststart'])
      .output(outputFilePath)
      .on('error', (err, stdout, stderr) => {
        functions.logger.info('An error occurred', err, stdout, stderr);
        return fs.unlinkSync(tempFilePath);
      })
      .on('start', (commandLine) => functions.logger.info('started video processing: ', commandLine))
      .on('end', (filenames) => {
        functions.logger.info('finished video processing: ', filenames);

        bucket.upload(outputFilePath, {
          destination: filePath
        })
        .then(() => {
          functions.logger.info('Successfully uploaded to storage');
          })
        .catch((error) => functions.logger.info('Failed to upload to storage', error))
        .finally(() => {
          functions.logger.info('Finished execution');
          return fs.unlinkSync(tempFilePath);});
      })
      .run();
    });
  };

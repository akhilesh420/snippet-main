const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const path = require('path');
const os = require('os');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path

exports.faststart = functions.storage.object().onFinalize(async (object) => {
  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.
  const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.

  if (!contentType.includes('video')) {
    functions.logger.info('File skipped because file type:', contentType);
    return null;
  }

  const fileName = path.basename(filePath);
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  const outputFilePath =  path.join(os.tmpdir(), 'faststarted.mp4');
  const metadata = {
    contentType: contentType,
  };

  await bucket.file(filePath).download({destination: tempFilePath});

  functions.logger.info('File downloaded locally to', tempFilePath);

  var cmd = ffmpeg(tempFilePath)
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
              destination: filePath,
              metadata: metadata,
            })
            .then(() => functions.logger.info('Successfully uploaded to storage'))
            .catch((error) => functions.logger.info('Failed to upload to storage', error))
            .finally(() => {return fs.unlinkSync(tempFilePath);})
          })
          .run();
});

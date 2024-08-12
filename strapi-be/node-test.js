const ffmpeg = require('fluent-ffmpeg');
const ffprobeStatic = require('ffprobe-static');
const path = require('path');

ffmpeg.setFfprobePath(ffprobeStatic.path);

const videoPath = path.resolve(__dirname, 'public/uploads/Daicon_IV_trailer_60c8cb0541.mp4');

console.log('Video Path:', videoPath);

ffmpeg.ffprobe(videoPath, (err, metadata) => {
  if (err) {
    console.error('Error running ffprobe:', err);
  } else {
    console.log('Video Metadata:', metadata);
  }
});

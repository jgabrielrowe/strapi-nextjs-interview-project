import ffmpeg from 'fluent-ffmpeg';
import ffprobeStatic from 'ffprobe-static';
import path from 'path';

ffmpeg.setFfprobePath(ffprobeStatic.path);

export default {
  async beforeCreate(event: { params: { data: { Video?: number, Duration?: number } } }) {
    const { data } = event.params;

    if (data.Video) {
      try {
        // Manually fetch the media entry and populate it
        const videoEntry = await strapi.db.query('plugin::upload.file').findOne({
          where: { id: data.Video },
          populate: true,
        });

        if (videoEntry && videoEntry.url) {
          // Dynamically resolve the path based on the environment
          const publicPath = path.join(strapi.dirs.static.public, videoEntry.url);
          console.log('Constructed Video Path:', publicPath);

          const duration = await getVideoDuration(publicPath);
          data.Duration = duration;
        } else {
          console.log('No valid video URL found.');
        }
      } catch (error) {
        console.error('Error calculating video duration:', error);
        throw new Error('Failed to calculate video duration.');
      }
    } else {
      console.log('No video provided.');
    }
  },

  async beforeUpdate(event: { params: { data: { Video?: number, Duration?: number } } }) {
    const { data } = event.params;

    if (data.Video) {
      try {
        // Manually fetch the media entry and populate it
        const videoEntry = await strapi.db.query('plugin::upload.file').findOne({
          where: { id: data.Video },
          populate: true,
        });

        if (videoEntry && videoEntry.url) {
          // Dynamically resolve the path based on the environment
          const publicPath = path.join(strapi.dirs.static.public, videoEntry.url);
          console.log('Constructed Video Path:', publicPath);

          const duration = await getVideoDuration(publicPath);
          data.Duration = duration;
        } else {
          console.log('No valid video URL found.');
        }
      } catch (error) {
        console.error('Error calculating video duration:', error);
        throw new Error('Failed to calculate video duration.');
      }
    } else {
      console.log('No video provided.');
    }
  },
};

async function getVideoDuration(videoPath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
      if (err) {
        return reject(err);
      }
      const duration = Math.round(metadata.format.duration);
      resolve(duration);
    });
  });
};

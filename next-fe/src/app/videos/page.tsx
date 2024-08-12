import { Video } from '../../types/video';
import VideoListItem from '../../components/VideoListItem/VideoListItem';
import { fetchVideos } from '../../lib/api';

export default async function VideosPage() {
  const videos = await fetchVideos();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>All Videos</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {videos && videos.length > 0 ? (
          videos.map((video: Video) => (
            <VideoListItem
              key={video.id}
              id={video.id}
              slug={video.attributes.Slug}
              title={video.attributes.Title}
              publishDate={video.attributes.PublishDate}
              duration={video.attributes.Duration}
            />
          ))
        ) : (
          <li>No videos available</li>
        )}
      </ul>
    </div>
  );
};

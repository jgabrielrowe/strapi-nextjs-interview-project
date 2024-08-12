import Link from 'next/link';

interface VideoListItemProps {
  id: string | number;
  slug: string;
  title: string;
  publishDate: string;
  duration: number;
}

const VideoListItem: React.FC<VideoListItemProps> = ({ id, slug, title, publishDate, duration }) => {
  return (
    <li key={id} style={{ margin: '10px 0' }}>
      <Link href={`/videos/${slug}`}>
          <strong>{title}</strong>
      </Link>
      <p style={{ margin: '5px 0' }}>
        Published on {publishDate} | {duration} minutes to watch
      </p>
    </li>
  );
};

export default VideoListItem;

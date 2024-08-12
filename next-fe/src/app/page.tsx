import Link from 'next/link';
import { fetchBlogs, fetchVideos } from '../lib/api';
import BlogListItem from '../components/BlogListItem/BlogListItem';
import VideoListItem from '../components/VideoListItem/VideoListItem';
import { BlogPost } from '../types/blogPost';
import { Video } from '../types/video';

export default async function HomePage() {
  const blogs = await fetchBlogs();
  const videos = await fetchVideos();

  console.log(videos);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>
        <Link href="/blogs">
          Blogs
        </Link>
      </h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog: BlogPost) => (
            <BlogListItem
              key={blog.id}
              id={blog.id}
              slug={blog.attributes.Slug}
              title={blog.attributes.Title}
              publishDate={blog.attributes.PublishDate}
              readingTime={blog.attributes.readingTime}
            />
          ))
        ) : (
          <li>No blogs available</li>
        )}
      </ul>

      <h1>
        <Link href="/videos">
          Videos
        </Link>
      </h1>
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
}

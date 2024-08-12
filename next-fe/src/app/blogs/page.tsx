import { BlogPost } from '../../types/blogPost';
import BlogListItem from '../../components/BlogListItem/BlogListItem';
import { fetchBlogs } from '../../lib/api';

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>All Blogs</h1>
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
    </div>
  );
};

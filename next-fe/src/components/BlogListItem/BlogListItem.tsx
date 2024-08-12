import Link from 'next/link';

interface BlogListItemProps {
  id: string | number;
  slug: string;
  title: string;
  publishDate: string;
  readingTime: number;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ id, slug, title, publishDate, readingTime }) => {
  return (
    <li key={id} style={{ margin: '10px 0' }}>
      <Link href={`/blogs/${slug}`}>
          <strong>{title}</strong>
      </Link>
      <p style={{ margin: '5px 0' }}>
        Published on {publishDate} | {readingTime} minutes to read
      </p>
    </li>
  );
};

export default BlogListItem;

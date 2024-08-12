import { notFound } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import { fetchBlogs } from '../../../lib/api';
import { BlogPost } from '../../../types/blogPost';

interface BlogPageProps {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const blogs = await fetchBlogs();
  const blog = blogs.find((b: BlogPost) => b.attributes.Slug === params.slug);

  if (!blog) {
    return notFound();
  }

  const { attributes } = blog;

  return (
    <>
      <Head>
        <title>{attributes.Metadata?.MetaTitle || attributes.Title}</title>
        <meta
          name="description"
          content={
            attributes.Metadata?.MetaDescription || 'Default description for the blog post'
          }
        />
        {/* Optionally add more meta tags */}
      </Head>
      <div>
        <h1>{attributes.Title}</h1>
        <p>Published on {attributes.PublishDate} | {attributes.readingTime} minutes to read</p>

        {attributes.Image?.data && (
          <Image
            src={`${process.env.STRAPI_API_URL}${attributes.Image.data.attributes.formats.large.url}`}
            alt={attributes.Image.data.attributes.alternativeText || 'Blog Image'}
            width={attributes.Image.data.attributes.formats.large.width}
            height={attributes.Image.data.attributes.formats.large.height}
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: attributes.Body }} />
      </div>
    </>
  );
};

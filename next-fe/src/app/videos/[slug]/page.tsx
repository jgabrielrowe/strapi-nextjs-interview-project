"use client"; // Ensure this component runs only on the client-side to hopefully fix video playback issues

import React from 'react';
import { notFound } from 'next/navigation';
import ReactPlayer from 'react-player';
import { fetchVideos } from '../../../lib/api';
import { Video } from '../../../types/video';

interface VideoPageProps {
  params: {
    slug: string;
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const videos = await fetchVideos();
  const video = videos.find((v: Video) => v.attributes.Slug === params.slug);

  if (!video) {
    notFound();
  }

  const { attributes } = video;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{attributes.Title}</h1>
      <p>Published on {attributes.PublishDate} | {attributes.Duration} minutes</p>
      <p>{attributes.Description}</p>

      <div style={{ margin: '20px 0' }}>
        <ReactPlayer
          url={`${process.env.STRAPI_API_URL}${attributes.Video.data.attributes.url}`}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

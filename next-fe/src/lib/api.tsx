import axios from 'axios';
import { BlogPost, BlogPostResponse } from '../types/blogPost';
import { Video, VideoResponse } from '../types/video';

const apiClient = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    Accept: 'application/json',
  },
  family: 4,
});

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await apiClient.get<BlogPostResponse>('/blog-posts?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const fetchVideos = async (): Promise<Video[]> => {
  try {
    const response = await apiClient.get<VideoResponse>('/videos?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

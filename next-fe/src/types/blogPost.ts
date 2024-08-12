interface ImageFormats {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  }
  
  interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
  }
  
  interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  }
  
  interface ImageData {
    id: number;
    attributes: ImageAttributes;
  }
  
  interface BlogPostAttributes {
    readingTime: number;
    Title: string;
    Slug: string;
    Body: string;
    PublishDate: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Image: {
      data: ImageData;
    };
    Metadata: {
      id: number;
      MetaTitle: string;
      MetaDescription: string;
    } | null;
  }
  
  interface BlogPost {
    id: number;
    attributes: BlogPostAttributes;
  }
  
  interface BlogPostResponse {
    data: BlogPost[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  export type { BlogPost, BlogPostResponse };
  
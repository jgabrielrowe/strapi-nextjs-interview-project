interface VideoAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any | null;
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
  
  interface VideoData {
    id: number;
    attributes: VideoAttributes;
  }
  
  export interface Video {
    id: number;
    attributes: {
      Title: string;
      Slug: string;
      PublishDate: string;
      Description: string;
      Duration: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Video: {
        data: VideoData;
      };
      Metadata: any | null;
    };
  }
  
  export interface VideoResponse {
    data: Video[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
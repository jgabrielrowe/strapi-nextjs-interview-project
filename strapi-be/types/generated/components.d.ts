import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsMetadata extends Schema.Component {
  collectionName: 'components_components_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'bulletList';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    SocialMediaPoster: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.metadata': ComponentsMetadata;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'ImageWithText';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    SectionImage: Attribute.Media;
    SectionText: Attribute.RichText;
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.test': PageComponentsTest;
    }
  }
}

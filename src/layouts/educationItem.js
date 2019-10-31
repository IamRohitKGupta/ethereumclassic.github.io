import React from 'react';
import { graphql } from 'gatsby';
import EducationMenu from '~components/educationMenu';
import Mdx from '~components/mdx';

import PageLayout from './pageLayout';

const EducationItem = ({ data: { mdx } }) => {
  return (
    <PageLayout
      link={{ to: '/education', text: 'Education' }}
      seo={{ title: mdx.frontmatter.title }}
    >
      <EducationMenu compact collapsed />
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
      <EducationMenu compact />
    </PageLayout>
  );
};

export default EducationItem;

export const query = graphql`
  query EducationItem($locale: String!, $title: String!, $parent: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { parent: { eq: $parent }, locale: { eq: $locale } }
    ) {
      body
      frontmatter {
        title
      }
    }
  }
`;

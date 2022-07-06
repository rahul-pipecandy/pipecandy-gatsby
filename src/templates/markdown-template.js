import React from 'react'
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function MarkdownTemplate({ data }) {
  const node = data.page;

  return (
    <>
      <Helmet>
        <title>{node.frontmatter.title}</title>
      </Helmet>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      <div> 
      </div>
    </>
  );
}

export const query = graphql`
query MyQuery($title: String) {
  page: markdownRemark(frontmatter: {title: {eq: $title}}) {
    frontmatter {
      title
    }
    html
  }
} 
`;
import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

export default function Post({ data }) {
  const posts = data.allSanityPost.nodes.map((post) => (
    <div
      style={{ backgroundColor: '#ddd', padding: '20px', margin: '20px 0' }}
      key={post._id}
    >
      <h2>{post.title}</h2>
      <small>{post.date}</small>
      <p>{post.description}</p>
      <div style={{ backgroundColor: '#eee', padding: '20px' }}>
        <BlockContent blocks={post._rawContent} />
      </div>
    </div>
  ));

  return (
    <div>
      <h1>My blog posts:</h1>
      {posts}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allSanityPost(sort: { fields: date, order: ASC }) {
      nodes {
        title
        date(formatString: "DD MMMM YY")
        description
        _rawContent(resolveReferences: { maxDepth: 10 })
        _id
      }
    }
  }
`;

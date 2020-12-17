import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from 'styled-components';

const block = css`
  display: block;
`;

export default function PoliciesPDF() {
  // statically query when not at page level
  const { policies } = useStaticQuery(graphql`
    query {
      policies: allSanityAbtFiles(filter: { title: { eq: "Policies" } }) {
        nodes {
          title
          file {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  // exit strategy
  if (!policies.nodes.length) return null;

  const linkTitle = policies.nodes[0]?.title;
  const linkUrl = policies.nodes[0]?.file.asset.url;

  return linkUrl ? (
    <>
      <a css={block} href={`${linkUrl}?dl=`}>
        Download {linkTitle || 'policies'}
      </a>
      <a css={block} href={`${linkUrl}`} target="_blank" rel="noreferrer">
        Open {linkTitle || 'policies'}
      </a>
    </>
  ) : null;
}

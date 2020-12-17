import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from 'styled-components';

const block = css`
  display: block;
`;

export default function SchedulePDF() {
  // statically query when not at page level
  const { schedule } = useStaticQuery(graphql`
    query {
      schedule: allSanityAbtFiles(filter: { title: { eq: "Schedule" } }) {
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
  if (!schedule.nodes.length) return null;

  const linkTitle = schedule.nodes[0]?.title;
  const linkUrl = schedule.nodes[0]?.file.asset.url;

  return linkUrl ? (
    <>
      <a css={block} href={`${linkUrl}?dl=`}>
        Download {linkTitle || 'schedule'}
      </a>
      <a css={block} href={`${linkUrl}`} target="_blank" rel="noreferrer">
        Open {linkTitle || 'schedule'}
      </a>
    </>
  ) : null;
}

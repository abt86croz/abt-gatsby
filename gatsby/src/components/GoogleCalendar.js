import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function GoogleCalendar() {
  const { calendar } = useStaticQuery(graphql`
    query {
      calendar: allSanityCalendar {
        nodes {
          URL
          Title
        }
      }
    }
  `);

  if (!calendar.nodes.length) return null;

  const title = calendar.nodes[0]?.Title;
  const url = calendar.nodes[0]?.URL;

  const decodedURL = decodeURIComponent(
    encodeURIComponent(url.replace(/&amp;/g, '&'))
  );

  return (
    <>
      <iframe
        src={decodedURL}
        title={title}
        width="100%"
        height="1000px"
        async
      />
    </>
  );
}

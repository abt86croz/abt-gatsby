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

  return (
    <>
      <div>
        {calendar.nodes.map((node) => (
          <iframe
            src={node.URL}
            id="test"
            title={node.Title}
            width="100%"
            height="1000px"
            async
          />
        ))}
      </div>
    </>
  );
}

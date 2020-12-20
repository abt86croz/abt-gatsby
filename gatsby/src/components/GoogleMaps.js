import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function GoogleMaps() {
  const { map } = useStaticQuery(graphql`
    query {
      map: allSanityMaps {
        nodes {
          URL
          title
        }
      }
    }
  `);

  if (!map.nodes.length) return null;

  const title = map.nodes[0]?.title;
  const url = map.nodes[0]?.URL;

  return (
    <>
      <iframe
        src={url}
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        injectScript
        title={title}
      />
    </>
  );
}

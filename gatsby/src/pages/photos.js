import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import NotFound from '../components/NotFound';

const StyledImageContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  img {
    cursor: pointer;
  }
`;

export default function Photos({ data }) {
  const images = data.photos?.node?.map(({ image, name }) => ({
    ...image.asset,
    caption: name,
    thumbAlt: name,
  }));

  if (!images) {
    return <NotFound />;
  }
  return (
    <StyledImageContainer>
      <Gallery images={images} />
    </StyledImageContainer>
  );
}

export const query = graphql`
  query PhotoQuery {
    photos: allSanityPhotos {
      nodes {
        name
        image {
          asset {
            thumb: fluid(maxWidth: 120, maxHeight: 90) {
              ...GatsbySanityImageFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

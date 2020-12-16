import { graphql } from 'gatsby';
import React from 'react';
import InstructorsList from '../components/InstructorsList';

export default function Instructors({ data }) {
  const instructors = data.instructors.nodes;
  return (
    <>
      <div>
        <p>Instructors ABT PAGE!</p>
        <InstructorsList instructors={instructors} />
      </div>
    </>
  );
}

// Page Queries
export const query = graphql`
  query StaffQuery {
    instructors: allSanityStaff {
      nodes {
        name
        _rawDescription
        id
        key: _id
        description {
          children {
            text
          }
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import serializers from '../utils/serializers';

const StyledDescription = styled.span`
  padding-bottom: var(--small);
`;

function SingleInstructor({ instructor }) {
  return (
    <div>
      <p>{instructor.name}</p>
      <div>
        <BlockContent
          blocks={instructor._rawDescription}
          serializers={serializers}
        />
      </div>
    </div>
  );
}

export default function InstructorsList({ instructors }) {
  return (
    <div>
      {instructors.map((instructor) => (
        <SingleInstructor key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
}

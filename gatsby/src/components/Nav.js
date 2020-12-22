import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PoliciesPDF from './PoliciesPDF';
import SchedulePDF from './SchedulePDF';

const StyledNav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <PoliciesPDF />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tuition">Tuition</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/post">POST</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <SchedulePDF />
        </li>
      </ul>
      {/* remove this */}
      <hr style={{ color: 'green' }} />
    </StyledNav>
  );
}

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

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
          <Link to="/about">About</Link>
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
      </ul>
      {/* remove this */}
      <hr style={{ color: 'green' }} />
    </StyledNav>
  );
}

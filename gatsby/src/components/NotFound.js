import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Minion404 from '../assets/images/minion404.jpg';

const StyledNotFound = styled.div`
  text-align: center;

  img {
    margin: 0 auto;
    display: block;
    width: 700px;
  }

  /* MOBILE */
  @media screen and (max-width: 768px) {
    img {
      width: 700px;
    }
  }

  @media screen and (max-width: 568px) {
    img {
      width: 300px;
    }
  }
`;

export default function NotFound() {
  return (
    <StyledNotFound>
      <Link to="/">
        {/* TODO: ADD BTN Component */}
        Take Me Home
      </Link>
      <img src={Minion404} alt="Minion Not Found Page" />
    </StyledNotFound>
  );
}

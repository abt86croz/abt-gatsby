import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

const ContentStyles = styled.div`
  background: var(--grey);
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </div>
  );
}

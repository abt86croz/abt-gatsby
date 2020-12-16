import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  font-size: var(--small);
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 5px;
`;

export default function Footer() {
  return (
    <footer>
      <StyledFooter>
        &copy; Albemarle Ballet Theatre {new Date().getFullYear()}, All Rights
        Reserved.
      </StyledFooter>
    </footer>
  );
}

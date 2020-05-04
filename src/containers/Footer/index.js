
import React from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  font-size: 1.5rem;
  background-color: grey;
  grid-row: 3 / 4;
  grid-column: 1 / span 3;
`;

const Footer = () => {

  return (
    <Root>
      Footer
    </Root>
  );
};

export default Footer;

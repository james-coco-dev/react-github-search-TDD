
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  background-color: grey;
  grid-column: 1 / span 3
`;

const Header = () => {

  return (
    <Root>
      <h1>Rect Github Search</h1>
    </Root>
  );
};

export default Header;

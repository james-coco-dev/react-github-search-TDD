
import React from 'react';

import Header from '../../containers/Header';
import { Main } from './styles';

const Layout = ({ children }) => {

  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
};

export default Layout;

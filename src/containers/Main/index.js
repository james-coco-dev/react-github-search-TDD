
import React, { useState } from 'react';

import Loading from '../../components/Loading';
import SearchInput from './SearchInput';
import User from './User';
import { Root, FlexContainer, LoadingWrapper } from './styles';
import { BASE_URL } from '../../utils/constants';

const Main = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchHandler = React.useCallback(userName => {
    setLoading(true);
    setTimeout( () => {
      fetch(`${BASE_URL}${userName}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setLoading(false);
      });
    },1000)
  }, []);

  return (
    <Root>
      <FlexContainer>
        <SearchInput onSearch={onSearchHandler} />
        {loading ? (
            <LoadingWrapper><Loading /></LoadingWrapper>
          ) : (
            <User user={user} />
          )
        }        
      </FlexContainer>
    </Root>
  );
};

export default Main;

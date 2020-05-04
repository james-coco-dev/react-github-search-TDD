
import React, { useState } from 'react';

import { Root, Input, SearchButton } from './styles';

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onClickHandler = React.useCallback(() => {
    onSearch(inputValue);
  }, [inputValue, onSearch]);

  return (
    <Root>
      <Input type='text' placeholder='Enter UserName' value={inputValue} onChange={onInputChangeHandler} />
      <SearchButton onClick={onClickHandler}>
        Search
      </SearchButton>
    </Root>
  );
};

export default React.memo(SearchInput);

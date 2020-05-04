
import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from './index';
import SearchInput from './SearchInput';

describe('main container testing', () => {
  let shallowWrapper;
  let mountWrapper;
  const onSearchTestHandler = jest.fn();
  const searchInput = mount(<SearchInput onSearch={onSearchTestHandler} />)

  beforeEach(() => {
    shallowWrapper = shallow(<Main />);
    mountWrapper = mount(<Main />);
  });

  it('Main should render correctly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('search input button click should call fn', () => {
    searchInput.find('button').simulate('click');
    expect(onSearchTestHandler).toHaveBeenCalled();
  });
});

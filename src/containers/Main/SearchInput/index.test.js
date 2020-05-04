
import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchInput from './index';

const onSearchTestHandler = jest.fn();

describe('search input testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SearchInput onSearch={onSearchTestHandler} />);
  });

  it('input should change input value state', () => {
    wrapper.find('input').simulate('change', {target: {value: 'test'}});
    expect(wrapper.find('input').prop('value')).toEqual('test');
  });
});

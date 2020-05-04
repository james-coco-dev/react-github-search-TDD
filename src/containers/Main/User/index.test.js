
import React from 'react';
import { mount, shallow } from 'enzyme';
import User from './index';

const onSearchTestHandler = jest.fn();

describe('user testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<User user={{}} />);
  });

  it('user props should not be null', () => {
    expect(wrapper.prop('user')).not.toBeNull();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Layout from './index';

describe('layout rendering test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  test('Layout should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });    
});

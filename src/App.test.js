import React from 'react';
import { shallow } from 'enzyme';

import Counter from './components/Counter';

describe('counter testing', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  // test('renders learn react link', () => {
  //   expect(wrapper.find('h1').text()).toContain('this is counter app');
  // });    

  // test('render a button with text of `increment`', () => {
  //   expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  // });

  // test('render the initial value of state in a div', () => {
  //   expect(wrapper.find('#counter-value').text()).toBe('0');
  // });

  // test('render the click event of increment button and increment coutner value', () => {
  //   wrapper.find('#increment-btn').simulate('click');
  //   expect(wrapper.find('#counter-value').text()).toBe('1');
  // });
});


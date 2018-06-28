// Test file for <%= componentName %>
// Uses shallow from the enzyme add-on framework for
// testing react native components.
// Learn more here:
// http://airbnb.io/enzyme/docs/guides/react-native.html

import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import <%= componentName %> from './index';

test.skip('it renders properly', () => {
  // Create a shallow wrapper of the component
  const wrapper = shallow(<<%= componentName %>/>);
  // Make sure it matches the snapshot
  expect(wrapper).toMatchSnapshot();
});

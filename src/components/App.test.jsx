import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import App from './App';

describe('App component', () => {
  it('renders without errors', () => {
    const component = shallow(<App />);
    expect(component.exists()).to.equal(true);
  });
});

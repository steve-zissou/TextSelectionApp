import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import Editor from './Editor';

describe('Editor component', () => {
  it('renders without errors', () => {
    const component = shallow(<Editor />);
    expect(component.exists()).to.equal(true);
  });
});

import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightEntryList from './HighlightEntryList';

describe('HighlightEntryList component', () => {
  it('renders without errors', () => {
    const component = shallow(<HighlightEntryList />);
    expect(component.exists()).to.equal(true);
  });
});

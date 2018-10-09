import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// Custom
import HighlightSpan from './HighlightSpan';

describe('HighlightSpan component', () => {
  it('renders without errors', () => {
    const props = { children: [], offsetKey: 'key' };
    const component = shallow(<HighlightSpan {...props} />);
    expect(component.exists()).to.equal(true);
  });
});

// 3rd Party
import PropTypes from 'prop-types';
import React from 'react';


export default function HighlightSpan(props) {
  const { children, colour, offsetKey } = props;
  return (
    <span
      id="highlight-span"
      data-offset-key={offsetKey}
      style={{ backgroundColor: colour }}
    >
      {children}
    </span>
  );
}

HighlightSpan.defaultProps = {
  colour: '#7cffff',
};

HighlightSpan.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  colour: PropTypes.string,
  offsetKey: PropTypes.string.isRequired,
};

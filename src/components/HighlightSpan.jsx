import PropTypes from 'prop-types';
import React from 'react';
// Style
import './HighlightSpan.css';


export default function HighlightSpan(props) {
  const { children, offsetKey } = props;
  return (
    <span
      id="highlight-span"
      data-offset-key={offsetKey}
    >
      {children}
    </span>
  );
}

HighlightSpan.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  offsetKey: PropTypes.string.isRequired,
};

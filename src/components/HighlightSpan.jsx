import React from 'react';


export default function HighlightSpan(props) {
  return (
    <span
      style={{ backgroundColor: 'rgba(98, 177, 254, 1.0)' }}
      data-offset-key={props.offsetKey}
    >
      {props.children}
    </span>
  );
}

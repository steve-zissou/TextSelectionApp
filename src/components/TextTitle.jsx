// 3rd Party
import PropTypes from 'prop-types';
import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// Style
import './TextTitle.css';


export default function TextTitle(props) {
  const { onHighlightClick } = props;
  return (
    <div id="text-title-container">
      <Typography id="title-text" variant="headline" gutterBottom component="h3">
        Add text to highlight below
      </Typography>
      <IconButton id="highlight-button" onClick={onHighlightClick}>
        <HighlightIcon />
      </IconButton>
    </div>
  );
}

TextTitle.defaultProps = {
  onHighlightClick: () => {},
};

TextTitle.propTypes = {
  onHighlightClick: PropTypes.func,
};

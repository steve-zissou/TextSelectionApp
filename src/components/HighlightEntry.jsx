// 3rd Party
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function HighlightEntry(props) {
  const { text } = props;
  return (
    <Typography variant="body1">
      {text}
    </Typography>
  );
}

HighlightEntry.defaultProps = {
  text: '',
};

HighlightEntry.propTypes = {
  text: PropTypes.string,
};

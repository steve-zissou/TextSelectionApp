// 3rd Party
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import HighlightIcon from '@material-ui/icons/Highlight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Style
import './HighlightEntry.css';

export default function HighlightEntry(props) {
  const { colour, text } = props;
  const truncated = text.length < 200 ? text : `${text.slice(0, 197)}...`;

  return (
    <ListItem id="highlightentry-listitem" divider>
      <Avatar style={{ backgroundColor: colour }}>
        <HighlightIcon />
      </Avatar>
      <ListItemText primary={truncated} />
    </ListItem>
  );
}

HighlightEntry.defaultProps = {
  colour: '#7cffff',
  text: '',
};

HighlightEntry.propTypes = {
  colour: PropTypes.string,
  text: PropTypes.string,
};

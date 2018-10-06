// 3rd Party
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import HighlightIcon from '@material-ui/icons/Highlight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function HighlightEntry(props) {
  const { text } = props;
  const truncated = text.length < 200 ? text : `${text.slice(0, 197)}...`;
  return (
    <ListItem>
      <Avatar>
        <HighlightIcon />
      </Avatar>
      <ListItemText primary={truncated} />
    </ListItem>
  );
}

HighlightEntry.defaultProps = {
  text: '',
};

HighlightEntry.propTypes = {
  text: PropTypes.string,
};

// 3rd Party
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
// Custom
import HighlightEntry from './HighlightEntry';
// Style
import './HighlightEntryList.css';


export default function HighlightEntryList(props) {
  const { entries } = props;

  return (
    <List id="highlight-list">
      {entries.map(entry => <HighlightEntry key={entry.id} colour={entry.colour} text={entry.text} />)}
    </List>
  );
}

HighlightEntryList.defaultProps = {
  entries: [],
};

HighlightEntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    text: PropTypes.string,
  })),
};

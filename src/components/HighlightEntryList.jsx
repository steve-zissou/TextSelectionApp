// 3rd Party
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
// Custom
import HighlightEntry from './HighlightEntry';


export default function HighlightEntryList(props) {
  const { entries } = props;

  return (
    <List>
      {entries.map(entry => <HighlightEntry key={entry.id} text={entry.text} />)}
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

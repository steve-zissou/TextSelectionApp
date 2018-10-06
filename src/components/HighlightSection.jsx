// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
// Custom
import HighlightEntryList from './HighlightEntryList';
import HighlightTitle from './HighlightTitle';
// Style
import './HighlightSection.css';


export default function HighlightSection() {
  const entries = [
    {
      text: 'Current rumours around the devices – which have been codenamed Sailfish and Marlin – say the devices will be 5-inch and 5.5-inch phones.', 
      id: 1,
    },
    {
      text: '5.5-inch phones. At Google\'s developer conference in May CEO Sundar Pichai',
      id: 2,
    },
    { text: 'more...', id: 3 },
  ];

  return (
    <Paper id="highlight-section">
      <HighlightTitle />
      <HighlightEntryList entries={entries} />
    </Paper>
  );
}

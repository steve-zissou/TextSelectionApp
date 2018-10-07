// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
// Custom
import HighlightEntryList from '../containers/HighlightEntryList';
import HighlightTitle from './HighlightTitle';
// Style
import './HighlightSection.css';


export default function HighlightSection() {
  return (
    <Paper id="highlight-section">
      <HighlightTitle />
      <HighlightEntryList />
    </Paper>
  );
}

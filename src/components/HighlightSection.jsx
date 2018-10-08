// 3rd Party
import React from 'react';
// Custom
import HighlightEntryList from '../containers/HighlightEntryList';
import HighlightTitle from './HighlightTitle';
// Style
import './HighlightSection.css';


export default function HighlightSection() {
  return (
    <div id="highlight-section">
      <HighlightTitle />
      <HighlightEntryList />
    </div>
  );
}

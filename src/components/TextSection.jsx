// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
// Custom
import Editor from '../containers/Editor';
import TextTitle from './TextTitle';
// Style
import './TextSection.css';

export default function TextSection() {
  return (
    <Paper id="text-section">
      <TextTitle onHighlightClick={() => console.log('onHighlightClick')} />
      <Editor />
    </Paper>
  );
}

// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
// Custom
import Editor from '../containers/Editor';
import TextTitle from './TextTitle';

export default function TextSection() {
  return (
    <Paper>
      <TextTitle />
      <Editor />
    </Paper>
  );
}

// 3rd Party
import React from 'react';
import Typography from '@material-ui/core/Typography';
// Style
import './HighlightTitle.css';

export default function HighlightTitle() {
  return (
    <Typography variant="headline" component="h2" id="highlight-title">
      Your selections:
    </Typography>
  );
}

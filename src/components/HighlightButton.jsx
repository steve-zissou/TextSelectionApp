import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';

import HeadlinesPicker from './HeadlinesPicker';

// Style
import 'draft-js/dist/Draft.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import editorStyles from './editorStyles.css';

export default class HighlightButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }
    // When using a click event inside overridden content, mouse down
    // events needs to be prevented so the focus stays in the editor
    // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
    onMouseDown(event) {
      event.preventDefault();
    }
  
    onClick() {
      // A button can call `onOverrideContent` to replace the content
      // of the toolbar. This can be useful for displaying sub
      // menus or requesting additional information from the user.
      this.props.onOverrideContent(HeadlinesPicker);
      console.log('HighlightButton onClick');
    }
  
    render() {
      return (
        <div onMouseDown={this.onMouseDown} className={editorStyles.headlineButtonWrapper}>
          <button onClick={this.onClick} className={editorStyles.headlineButton}>
            <HighlightIcon />
          </button>
        </div>
      );
    }
  }
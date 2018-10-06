// 3rd Party
import React from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
// Custom
import CONFIG from '../CONFIG';
import HighlightButton from './HighlightButton';

// Style
import 'draft-js/dist/Draft.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import editorStyles from './editorStyles.css';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    HighlightButton,
  ],
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

export default class SimpleInlineToolbarEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorStateWithText(CONFIG.defaultText),
    };

    this.onChange = this.onChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  onChange(editorState) {
    console.log('on change called');
    this.setState({
      editorState,
    });
  }

  focus() {
    console.log('focus called');
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </div>
    );
  }
}

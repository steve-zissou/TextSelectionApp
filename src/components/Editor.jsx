// 3rd Party
import PropTypes from 'prop-types';
import React from 'react';
import PluginEditor, { createEditorStateWithText } from 'draft-js-plugins-editor';
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

export default class Editor extends React.Component {
  static isValidSelection(text) {
    return text.replace(/(?:\r\n|\r|\n|\s)/g, '').length > 0;
  }

  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorStateWithText(CONFIG.defaultText),
    };

    this.focus = this.focus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Get current selected text
   * @param  {Draft.ContentState}
   * @param  {Draft.SelectionState}
   * @param  {String}
   * @return {String}
   */
  // https://github.com/facebook/draft-js/issues/442
  static getTextSelection(content, selection) {
    const startKey = selection.getStartKey();
    const endKey = selection.getEndKey();
    const blocks = content.getBlockMap();
    let lastWasEnd = false;

    const selectedBlock = blocks
      .skipUntil(block => block.getKey() === startKey)
      .takeUntil((block) => {
        const result = lastWasEnd;
        if (block.getKey() === endKey) { lastWasEnd = true; }
        return result;
      });

    return selectedBlock
      .map((block) => {
        const key = block.getKey();
        const text = block.getText();
        const start = (key === startKey) ? selection.getStartOffset() : 0;
        const end = (key === endKey) ? selection.getEndOffset() : text.length;
        return text.slice(start, end);
      })
      .join('\n');
  }

  onChange(editorState) {
    const { onNewSelection } = this.props;
    const selectionState = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const selection = Editor.getTextSelection(currentContent, selectionState);
    if (Editor.isValidSelection(selection)) {
      onNewSelection(selection);
    }
    this.setState({ editorState });
  }

  focus() {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <PluginEditor
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

Editor.defaultProps = {
  onNewSelection: () => {},
};

Editor.propTypes = {
  onNewSelection: PropTypes.func,
};

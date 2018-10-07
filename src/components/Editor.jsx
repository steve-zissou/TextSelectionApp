// 3rd Party
import PropTypes from 'prop-types';
import React from 'react';
import {
  CompositeDecorator,
  ContentState,
  Editor,
  EditorState,
} from 'draft-js';
// Custom
import CONFIG from '../CONFIG';
import HighlightSpan from './HighlightSpan';
import { getTextSelection, isBlockInRange, isValidSelection } from '../utils/draft-js';

// Style
import 'draft-js/dist/Draft.css';
import './Editor.css';


export default class HighlightEditor extends React.Component {
  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
    this.highlightStrategy = this.highlightStrategy.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getDecorator = this.getDecorator.bind(this);

    const content = ContentState.createFromText(CONFIG.defaultText);

    this.state = {
      editorState: EditorState.createWithContent(content, this.getDecorator()),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { highlights } = this.props;

    if (nextProps.highlights.length !== highlights.length) {
      this.focus();
    }
  }

  onChange(editorState) {
    const { onNewSelection } = this.props;
    const selectionState = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const text = getTextSelection(currentContent, selectionState);

    if (isValidSelection(text)) {
      const startKey = selectionState.getStartKey();
      const endKey = selectionState.getEndKey();
      const startOffset = selectionState.getStartOffset();
      const endOffset = selectionState.getEndOffset();

      onNewSelection({
        text,
        startKey,
        endKey,
        startOffset,
        endOffset,
      });
    }

    // re-assign the decorator to get the highlights to show immediately
    let refreshedEditor = EditorState.set(editorState, { decorator: this.getDecorator() });
    // clear the current selection
    refreshedEditor = EditorState.moveSelectionToEnd(refreshedEditor);
    this.setState({ editorState: refreshedEditor });
  }

  getDecorator() {
    return new CompositeDecorator([
      {
        strategy: this.highlightStrategy,
        component: HighlightSpan,
      },
    ]);
  }

  highlightStrategy(block, callback, content) {
    const { highlights } = this.props;
    const { length } = block.getText();
    const key = block.getKey();

    highlights.forEach(
      ({
        startKey, endKey, startOffset, endOffset,
      }) => {
        if (isBlockInRange(content, block, startKey, endKey)) {
          const start = (key === startKey) ? startOffset : 0;
          const end = (key === endKey) ? endOffset : length;
          callback(start, end);
        }
      },
    );
  }

  focus() {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}

HighlightEditor.defaultProps = {
  highlights: [],
  onNewSelection: () => {},
};

HighlightEditor.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.shape({
    endKey: PropTypes.string.isRequired,
    endOffset: PropTypes.number.isRequired,
    startKey: PropTypes.string.isRequired,
    startOffset: PropTypes.number.isRequired,
  })),
  onNewSelection: PropTypes.func,
};

// 3rd Party
import PropTypes from 'prop-types';
import React from 'react';
// Custom
import Editor from '../containers/Editor';
import TextTitle from './TextTitle';
// Style
import './TextSection.css';

export default class TextSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: null,
    };

    this.handleHighlightClick = this.handleHighlightClick.bind(this);
    this.handleNewSelection = this.handleNewSelection.bind(this);
  }

  handleNewSelection(selection) {
    this.setState({ selection });
  }

  handleHighlightClick() {
    const { onNewSelection } = this.props;
    const { selection } = this.state;
    onNewSelection(selection);
    this.setState({ selection: null });
  }

  render() {
    const { selection } = this.state;
    return (
      <div id="text-section">
        <TextTitle disableButton={!selection} onHighlightClick={this.handleHighlightClick} />
        <Editor onNewSelection={this.handleNewSelection} />
      </div>
    );
  }
}

TextSection.defaultProps = {
  onNewSelection: () => {},
};

TextSection.propTypes = {
  onNewSelection: PropTypes.func,
};

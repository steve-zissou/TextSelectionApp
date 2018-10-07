import React from 'react';

import {
  HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton,
} from 'draft-js-buttons';

// Style
import 'draft-js/dist/Draft.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';


export default class HeadlinesPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onWindowClick = this.onWindowClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onWindowClick() {
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);
  }

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => <Button key={i} {...this.props} />)}
      </div>
    );
  }
}

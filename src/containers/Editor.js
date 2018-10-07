// 3rd Party
import { connect } from 'react-redux';
// Custom
import { addHighlightAction } from '../actions/highlights';
import Editor from '../components/Editor';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onNewSelection: selection => dispatch(addHighlightAction(selection)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

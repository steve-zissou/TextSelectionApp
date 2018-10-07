// 3rd Party
import { connect } from 'react-redux';
// Custom
import { getAllHighlights } from '../reducers/highlights';
import { addHighlightAction } from '../actions/highlights';
import Editor from '../components/Editor';


function mapStateToProps(state) {
  const highlights = getAllHighlights(state.highlights);
  return {
    highlights,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewSelection: selection => dispatch(addHighlightAction(selection)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

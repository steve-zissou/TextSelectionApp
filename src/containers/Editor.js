// 3rd Party
import { connect } from 'react-redux';
// Custom
import { getAllHighlights } from '../reducers/highlights';
import Editor from '../components/Editor';


function mapStateToProps(state) {
  const highlights = getAllHighlights(state.highlights);
  return {
    highlights,
  };
}

export default connect(mapStateToProps)(Editor);

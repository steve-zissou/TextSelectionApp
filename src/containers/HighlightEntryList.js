// 3rd Party
import { connect } from 'react-redux';
// Custom
import { getAllHighlights } from '../reducers/highlights';
import HighLightEntryList from '../components/HighlightEntryList';


function mapStateToProps(state) {
  const entries = getAllHighlights(state.highlights);
  return {
    entries,
  };
}

export default connect(mapStateToProps)(HighLightEntryList);

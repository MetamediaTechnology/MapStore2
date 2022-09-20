import { connect } from 'react-redux'; 
import { createSelector } from 'reselect'; 
import { widgetFeatureHightlights } from "../../../selectors/widgets"; 
 
export default connect(createSelector(widgetFeatureHightlights, feature_highlight => ({ feature_highlight })));
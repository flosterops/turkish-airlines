import { combineReducers } from 'redux';
import appReducer from 'store/reducers/appReducer';
import modalReducer from 'store/reducers/modalReducer';

export default combineReducers({
    app: appReducer,
    modals: modalReducer
});

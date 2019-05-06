import { combineReducers } from 'redux';
import questionReducers from './storeTheQue';

export default combineReducers({
    questions : questionReducers
    
});
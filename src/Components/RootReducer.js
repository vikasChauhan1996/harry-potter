import {combineReducers} from 'redux';
import {allCharacters,allStudents,getStaff} from './Reducer'

export default combineReducers({
    allCharacters,
    allStudents,
    getStaff,

})
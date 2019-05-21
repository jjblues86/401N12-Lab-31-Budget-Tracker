import {combineReducers} from 'redux';
import categories from './card-reducer';
import cards from './card-reducer';

export default combineReducers({
    categories,
    cards,
});
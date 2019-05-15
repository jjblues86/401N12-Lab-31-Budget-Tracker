import { createStore } from 'redux';
import createReducer from './reducer/category-reducer';

export default () => {
    return createStore(createReducer);
}
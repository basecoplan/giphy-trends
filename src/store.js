import { createStore } from 'redux';
import reducer from './reducer';

const initial = { gifs: []};
const store = createStore(reducer, initial);

export default store;
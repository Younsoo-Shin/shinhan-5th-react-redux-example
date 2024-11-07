import counterReducer from './reducers/counter';
// import { createStore } from "redux";
// createStore()

import { combineReducers, createStore } from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);
export default store;

// store.dispatch // useDispatch
// store.getState(()) // useSelectorr

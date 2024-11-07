import counterReducer from './reducers/counter';
// import { createStore } from "redux";
// createStore()

import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todo';
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);
export default store;

// store.dispatch
// useSelector() ==> store.getState()
// store.getState()

// store.dispatch // useDispatch() store.dispatch
// store.getState(()) // useSelectorr

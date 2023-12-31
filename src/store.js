import { createStore } from 'redux';
import enrollmentReducer from './reducers';

const store = createStore(
  enrollmentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools Extension
);

export default store;

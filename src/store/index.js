import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Mainreducer } from './Mainreducer';
import { Archivereducer } from './Archivereducer';
import { Likereducer } from './Likereducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  Mainreducer,
  Archivereducer,
  Likereducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

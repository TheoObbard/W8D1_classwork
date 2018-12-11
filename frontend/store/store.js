import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const configureStore = (preloadedstate = {}) => {

};


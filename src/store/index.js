import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(TodoSagas);
export default store;
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import reducer from "./reducer";


const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(enhancer));
export default store;

sagaMiddleware.run(sagas);
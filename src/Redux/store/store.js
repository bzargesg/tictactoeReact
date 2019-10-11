import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../Reducers";

import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default createStore(rootReducer, applyMiddleware(loggerMiddleware));
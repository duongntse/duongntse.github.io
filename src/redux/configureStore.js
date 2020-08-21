import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers';
import loggingMiddleware from './middlewares/loggingMiddleWare';
import apiMiddleware from './middlewares/apiMiddleWare';
// ...
export const configureStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(loggingMiddleware, apiMiddleware)
	);

	return store;
};

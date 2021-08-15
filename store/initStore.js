import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import sidebar from 'store/reducers/sidebar.reducer';

const rootReducer = combineReducers({
    sidebar
});

export const wrapper = createWrapper(() => createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk) //Applying redux-thunk middleware
)));

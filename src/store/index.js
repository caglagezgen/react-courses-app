import {
	legacy_createStore as createStore,
	compose,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialCoursesState } from './courses/reducer';
import { initialAuthorsState } from './authors/reducer';
import { initialUserState } from './user/reducer';
import { initialCourseState } from './course/reducer';

import rootReducer from './rootReducer';

const appInitialState = {
	courses: initialCoursesState,
	course: initialCourseState,
	authors: initialAuthorsState,
	user: initialUserState,
};

const composedEnhancer = compose(applyMiddleware(thunk), composeWithDevTools());

const store = createStore(rootReducer, appInitialState, composedEnhancer);

export default store;

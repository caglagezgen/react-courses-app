import { legacy_createStore as createStore } from 'redux';

import { initialCoursesState } from './courses/reducer';
import { initialAuthorsState } from './authors/reducer';
import { initialUserState } from './user/reducer';

import rootReducer from './rootReducer';

const appInitialState = {
	courses: initialCoursesState,
	authors: initialAuthorsState,
	user: initialUserState,
};

const store = createStore(rootReducer, appInitialState);

export default store;

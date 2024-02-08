import { legacy_createStore as createStore } from 'react-redux';

import { initialCoursesState } from './courses/reducer';
import { initialAuthorState } from './authors/reducer';
import { initialUserState } from './user/reducer';

import rootReducer from './rootReducer';

const appInitialState = {
	courses: initialCoursesState,
	authors: initialAuthorState,
	user: initialUserState,
};

const store = createStore(rootReducer, appInitialState);

export default store;

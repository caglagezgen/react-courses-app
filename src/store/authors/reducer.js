import { SAVE_AUTHORS, ADD_AUTHOR } from './types';

export const initialAuthorState = [];

const authorsReducer = (state = initialAuthorState, action) => {
	switch (action.type) {
		case SAVE_AUTHORS: {
			return action.type;
		}
		case ADD_AUTHOR: {
			return [...state, action.payload];
		}
		default:
			return state;
	}
};

export default authorsReducer;

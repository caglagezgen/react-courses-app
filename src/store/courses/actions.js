import { SAVE_COURSES, DELETE_COURSES, ADD_COURSES } from './types';

export const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
export const addCourseAction = (payload) => ({ type: ADD_COURSES, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSES,
	payload,
});

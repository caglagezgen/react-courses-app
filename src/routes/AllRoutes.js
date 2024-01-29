import PropTypes from 'prop-types';
import { useRoutes, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Courses from '../components/Courses/Courses';
import CreateCourse from '../components/CreateCourse/CreateCourse';
import CourseInfo from '../components/CourseInfo/CourseInfo';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

const AllRoutes = ({
	courses,
	filteredCourses,
	authors,
	setFilteredCourses,
	searchThroughCourses,
	searchedCoursesRef,
	addNewCourse,
	updateAuthors,
}) => {
	let routes = useRoutes([
		{
			path: '*',
			element: <Navigate to='/courses' />,
		},
		{
			path: '/courses',
			children: [
				{
					path: '',
					element: (
						<ProtectedRoute>
							<Courses
								courses={
									filteredCourses === undefined ? courses : filteredCourses
								}
								authors={authors}
								resetCoursesState={() => setFilteredCourses()}
								searchedCoursesRef={searchedCoursesRef}
								searchThroughCourses={searchThroughCourses}
							/>
						</ProtectedRoute>
					),
				},
				{
					path: 'add',
					element: (
						<ProtectedRoute>
							<CreateCourse
								authors={authors}
								addNewCourse={addNewCourse}
								updateAuthors={updateAuthors}
							/>
						</ProtectedRoute>
					),
				},
				{
					path: ':courseId',
					element: (
						<ProtectedRoute>
							<CourseInfo courses={courses} authors={authors} />
						</ProtectedRoute>
					),
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/registration',
			element: <Registration />,
		},
	]);
	return routes;
};

export default AllRoutes;

AllRoutes.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	courses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			duration: PropTypes.number,
			creationDate: PropTypes.string,
			authors: PropTypes.arrayOf(PropTypes.string),
		})
	),
	filteredCourses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			duration: PropTypes.number,
			creationDate: PropTypes.string,
			authors: PropTypes.arrayOf(PropTypes.string),
		})
	),
	setFilteredCourses: PropTypes.func,
	searchThroughCourses: PropTypes.func,
	searchedCoursesRef: PropTypes.object,
	addNewCourse: PropTypes.func,
	updateAuthors: PropTypes.func,
};

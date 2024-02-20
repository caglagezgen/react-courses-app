import { useRoutes, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Courses from '../components/Courses/Courses';
import CreateCourse from '../components/CreateCourse/CreateCourse';
import CourseInfo from '../components/CourseInfo/CourseInfo';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

const AllRoutes = () => {
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
							<Courses />
						</ProtectedRoute>
					),
				},
				{
					path: 'add',
					element: (
						<ProtectedRoute>
							<CreateCourse />
						</ProtectedRoute>
					),
				},
				{
					path: ':courseId',
					element: (
						<ProtectedRoute>
							<CourseInfo />
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

import { useRoutes, Navigate } from 'react-router-dom';

import Courses from '../components/Courses/Courses';
import CourseForm from '../components/CreateCourse/CourseForm';
import CourseInfo from '../components/CourseInfo/CourseInfo';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import ProtectedRoute from './ProtectedRoute';

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
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						</ProtectedRoute>
					),
				},
				{
					path: 'update/:courseId',
					element: (
						<ProtectedRoute>
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
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

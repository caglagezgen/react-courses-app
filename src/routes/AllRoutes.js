import { Routes, Route, Navigate } from 'react-router-dom';

import Courses from '../components/Courses/Courses';
import CourseForm from '../components/CreateCourse/CourseForm';
import CourseInfo from '../components/CourseInfo/CourseInfo';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/courses' />} />
			<Route path='/courses' element={<PrivateRoute />}>
				<Route index element={<Courses />} />
				<Route path='add' element={<CourseForm requireAdmin />} />
				<Route path='update/:courseId' element={<CourseForm requireAdmin />} />
				<Route path=':courseId' element={<CourseInfo />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
		</Routes>
	);
};

export default AllRoutes;

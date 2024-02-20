import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes';

import apiService from './store/services';
import { saveCoursesAction } from './store/courses/actions';
import { saveAuthorsAction } from './store/authors/actions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getAllCourses = async () => {
			const response = await apiService.getCourses();
			const data = await response.json();
			dispatch(saveCoursesAction(data.result));
		};

		const getAuthors = async () => {
			const response = await apiService.getAuthors();
			const data = await response.json();
			dispatch(saveAuthorsAction(data.result));
		};

		getAllCourses();
		getAuthors();
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<AllRoutes />
		</Router>
	);
};

export default App;

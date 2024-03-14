import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import AllRoutes from './routes/AllRoutes';

import { getCourses } from './store/courses/thunk';
import { getAuthors } from './store/authors/thunk';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<AllRoutes />
		</Router>
	);
};

export default App;

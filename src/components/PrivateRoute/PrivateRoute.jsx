import { Navigate } from 'react-router-dom';

import getUserFromLocalStorage from '../../helpers/getUserFromLocalStorage';

const PrivateRoute = ({ children }) => {
	// here we chech the role of the user
	if (getUserFromLocalStorage()?.role === 'admin') {
		return children;
	} else {
		return <Navigate to='/courses' />;
	}
};

export default PrivateRoute;

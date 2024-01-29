import { Navigate } from 'react-router-dom';

import getUserInfoFromLocalStorage from '../helpers/getUserInfoFromLocalStorage';

const ProtectedRoute = ({ children }) => {
	const loggedUser = getUserInfoFromLocalStorage();

	if (!loggedUser?.token) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;

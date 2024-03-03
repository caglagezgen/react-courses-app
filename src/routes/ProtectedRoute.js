import { Navigate } from 'react-router-dom';

import getUserFromLocalStorage from '../helpers/getUserInfoFromLocalStorage';

const ProtectedRoute = ({ children }) => {
	if (!getUserFromLocalStorage()?.token) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;

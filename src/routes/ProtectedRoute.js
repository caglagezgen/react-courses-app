import { Navigate } from 'react-router-dom';

import getTokenFromLocalStorage from '../helpers/getTokenFromLocalStorage';

const ProtectedRoute = ({ children }) => {
	if (!getTokenFromLocalStorage()) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;

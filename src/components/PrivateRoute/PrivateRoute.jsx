import { Outlet, Navigate } from 'react-router-dom';
import getUserFromLocalStorage from '../../helpers/getUserInfoFromLocalStorage';

const PrivateRoute = ({ requireAdmin = false }) => {
	const user = getUserFromLocalStorage();

	if (!user) {
		return <Navigate to='/login' />;
	}

	if (requireAdmin && user.role !== 'admin') {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};

export default PrivateRoute;

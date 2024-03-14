import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUserSelector } from '../store/user/selectors';

const ProtectedRoute = ({ children }) => {
	const user = useSelector(getUserSelector);

	if (!user) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default ProtectedRoute;

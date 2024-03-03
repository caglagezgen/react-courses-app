import { Navigate } from 'react-router-dom';

import getUserFromLocalStorage from '../../helpers/getUserInfoFromLocalStorage';

const PrivateRoute = ({ children }) => {
	if (getUserFromLocalStorage()?.role === 'admin') {
		return children;
	} else {
		return <Navigate to='courses' />;
	}
};

export default PrivateRoute;

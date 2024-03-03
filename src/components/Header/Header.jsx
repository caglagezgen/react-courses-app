import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import { logoutUser, getLoggedUser } from '../../store/user/thunk';
import { getUserSelector } from '../../store/user/selectors';
import getUserFromLocalStorage from '../../helpers/getUserInfoFromLocalStorage';

const Header = () => {
	const loggedUser = useSelector(getUserSelector);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const location = useLocation();

	const logout = () => {
		dispatch(logoutUser());
		localStorage.removeItem('user');
		navigate('/login');
	};

	useEffect(() => {
		if (
			location.pathname !== '/login' &&
			location.pathname !== '/registration' &&
			getUserFromLocalStorage()?.token &&
			loggedUser.role === ''
		) {
			dispatch(getLoggedUser());
		}
	}, [dispatch, loggedUser.role, loggedUser.isAuth, location.pathname]);

	return (
		<div className='flex justify-between px-10 border-b-2 border-blue-600 mb-12'>
			<Logo />
			<div className='flex items-center'>
				{getUserFromLocalStorage()?.token &&
					location.pathname !== '/login' &&
					location.pathname !== '/registration' && (
						<>
							<p className='mr-4 font-bold'>{loggedUser.name}</p>
							<Button className='m-auto' buttonText='Logout' onClick={logout} />
						</>
					)}
			</div>
		</div>
	);
};

export default Header;

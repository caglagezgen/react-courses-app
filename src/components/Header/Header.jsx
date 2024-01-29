import { useNavigate, useLocation } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button.jsx';
import { BRAND_NAME } from '../../constants';

import getUserInfoFromLocalStorage from '../../helpers/getUserInfoFromLocalStorage';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const loggedUser = getUserInfoFromLocalStorage();

	const logout = () => {
		localStorage.removeItem('user');
		navigate('/login');
	};

	return (
		<div className='flex justify-between px-10 border-b-2 border-blue-600 mb-12'>
			<Logo />
			<h1 className='space-between py-3 pl-1 cursor-pointer font-bold'>
				{BRAND_NAME}
			</h1>
			<div className='flex items-center'>
				{localStorage.getItem('user') &&
					location.pathname !== '/login' &&
					location.pathname !== '/registration' && (
						<>
							<p className='mr-4 font-bold'>{loggedUser?.name}</p>
							<Button className='m-auto' buttonText='Logout' onClick={logout} />
						</>
					)}
			</div>
		</div>
	);
};

export default Header;

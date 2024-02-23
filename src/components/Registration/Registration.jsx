import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import InvalidCredentials from '../InvalidCredentials/InvalidCredentials';

import { saveUserAction } from '../../store/user/actions';
import getTokenFromLocalStorage from '../../helpers/getTokenFromLocalStorage';

import { LOGIN_BUTTON_TEXT } from '../../constants';

const Login = ({ forwardedRef }) => {
	const [loginError, setLoginError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (getTokenFromLocalStorage()) {
			navigate('/courses');
		}
	}, [navigate]);

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
				method: 'POST',
				body: JSON.stringify({
					email: forwardedRef.current.children[0].children[1].value,
					password: forwardedRef.current.children[1].children[1].value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (data.successful) {
				dispatch(
					saveUserAction({
						name: data.user.name,
						email: data.user.email,
						token: data.result.split(' ')[1],
					})
				);
				localStorage.setItem('token', data.result.split(' ')[1]);
				navigate('/courses');
			} else {
				setLoginError(true);

				setTimeout(() => {
					setLoginError(false);
				}, 5000);

				forwardedRef.current.children[0].children[1].value = '';
				forwardedRef.current.children[1].children[1].value = '';
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{loginError && <InvalidCredentials />}
			<form
				className='flex flex-col  items-center w-[20%] m-auto'
				onSubmit={loginUser}
			>
				<Input
					type='email'
					labelText='Email'
					placeholderText='Enter email'
					width={100}
					alignSelf='start'
					ref={forwardedRef}
					marginBottom={5}
				/>
				<Input
					type='password'
					labelText='Password'
					placeholderText='Enter password'
					width={100}
					alignSelf='start'
					ref={forwardedRef}
					marginBottom={5}
				/>
				<Button buttonText={LOGIN_BUTTON_TEXT} />
			</form>
			<p className='text-center mt-5'>
				If you don't have an account you can{' '}
				<Link
					to='/registration'
					className='text-blue-500'
					title='Go to Login page'
				>
					Register
				</Link>{' '}
				one
			</p>
		</>
	);
};

export default Login;

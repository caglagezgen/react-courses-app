import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InvalidCredentials from '../InvalidCredentials/InvalidCredentials';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import getUserInfoFromLocalStorage from '../../helpers/getUserInfoFromLocalStorage';

import { LOGIN_BUTTON_TEXT } from '../../constants';

const Login = () => {
	const [loginError, setLoginError] = useState(false);

	const navigate = useNavigate();

	const emailRef = useRef();
	const passwordRef = useRef();

	const loggedUser = getUserInfoFromLocalStorage();

	useEffect(() => {
		if (loggedUser?.name && loggedUser?.token) {
			navigate('/courses');
		}
	}, [loggedUser?.name, loggedUser?.token, navigate]);

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
				method: 'POST',
				body: JSON.stringify({
					email: emailRef.current.value,
					password: passwordRef.current.value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (data.successful) {
				localStorage.setItem(
					'user',
					JSON.stringify({
						token: data.result.split(' ')[1],
						name: data.user.name,
					})
				);
				navigate('/courses');
			} else {
				setLoginError(true);

				setTimeout(() => {
					setLoginError(false);
				}, 5000);

				emailRef.current.value = '';
				passwordRef.current.value = '';
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
					ref={emailRef}
					marginBottom={5}
				/>
				<Input
					type='password'
					labelText='Password'
					placeholderText='Enter password'
					width={100}
					alignSelf='start'
					ref={passwordRef}
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

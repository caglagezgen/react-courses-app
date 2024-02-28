import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import InvalidCredentials from '../InvalidCredentials/InvalidCredentials';

import getTokenFromLocalStorage from '../../helpers/getTokenFromLocalStorage';

import { REGISTRATION_BUTTON_TEXT } from '../../constants';

const Registration = () => {
	const [registrationError, setRegistrationError] = useState(false);

	const navigate = useNavigate();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		if (getTokenFromLocalStorage()) {
			navigate('/courses');
		}
	}, [navigate]);

	const registerUser = async (e) => {
		e.preventDefault();

		const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
			method: 'POST',
			body: JSON.stringify({
				name: nameRef.current?.value,
				email: emailRef.current?.value,
				password: passwordRef.current?.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();

		if (data.successful) {
			navigate('/login');
		} else {
			setRegistrationError(true);

			setTimeout(() => {
				setRegistrationError(false);
			}, 5000);

			nameRef.current.value = '';
			emailRef.current.value = '';
			passwordRef.current.value = '';
		}
	};
	return (
		<>
			{registrationError && <InvalidCredentials />}
			<form
				className='flex flex-col  items-center w-[25%] m-auto'
				onSubmit={registerUser}
			>
				<Input
					labelText='Name'
					placeholderText='Enter name'
					width={100}
					alignSelf='start'
					marginBottom={5}
					refValue={nameRef}
				/>
				<Input
					type='email'
					labelText='Email'
					placeholderText='Enter email'
					width={100}
					alignSelf='start'
					marginBottom={5}
					refValue={emailRef}
				/>
				<Input
					type='password'
					labelText='Password'
					placeholderText='Enter password'
					width={100}
					alignSelf='start'
					marginBottom={5}
					refValue={passwordRef}
				/>
				<Button buttonText={REGISTRATION_BUTTON_TEXT} />
			</form>
			<p className='text-center mt-5'>
				If you have an account you can{' '}
				<Link to='/login' className='text-blue-500' title='Go to Login page'>
					Login
				</Link>
			</p>
		</>
	);
};

export default Registration;

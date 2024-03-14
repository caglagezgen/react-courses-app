import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import InvalidCredentials from '../InvalidCredentials/InvalidCredentials';

import { register } from '../../store/user/thunk';
import {
	registrationErrorAction,
	successfullRegistrationAction,
} from '../../store/user/actions';
import { getUserSelector } from '../../store/user/selectors';
import getUserFromLocalStorage from '../../helpers/getUserFromLocalStorage';

import { REGISTRATION_BUTTON_TEXT } from '../../constants';

const Registration = () => {
	const [registrationError, setRegistrationError] = useState(false);

	const loggedUser = useSelector(getUserSelector);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	useEffect(() => {
		if (getUserFromLocalStorage()?.token) {
			navigate('/courses');
		}
	}, [navigate]);

	useEffect(() => {
		if (loggedUser.successfullRegistration && !loggedUser.registrationError) {
			navigate('/login');
			dispatch(successfullRegistrationAction(false));
		}
		if (loggedUser.registrationError) {
			setRegistrationError(true);

			setTimeout(() => {
				setRegistrationError(false);
				dispatch(registrationErrorAction(false));
			}, 5000);
		}
	}, [
		loggedUser.successfullRegistration,
		loggedUser.registrationError,
		navigate,
		dispatch,
	]);

	const registerUser = async (e) => {
		e.preventDefault();

		dispatch(
			register(
				nameRef.current.value,
				emailRef.current.value,
				passwordRef.current.value
			)
		);
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

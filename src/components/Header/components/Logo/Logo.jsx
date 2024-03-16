import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/icons/favicon.ico';

export default function Logo({ dataTestId }) {
	return (
		<Link to='/courses'>
			<img
				src={logo}
				alt='REACT COURSES'
				className='py-3 pl-1 cursor-pointer'
				title='Home'
				data-testid={dataTestId}
			/>
		</Link>
	);
}

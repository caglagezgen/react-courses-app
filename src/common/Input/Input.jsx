import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(
	(
		{
			placeholderText,
			width,
			labelText,
			inputId,
			onChange,
			type,
			marginRight,
			marginBottom,
			alignSelf,
		},
		ref
	) => (
		<>
			<label
				htmlFor={inputId}
				className={`block mb-3 cursor-pointer ${
					alignSelf ? `self-${alignSelf}` : 'self-center'
				}`}
			>
				{labelText}
			</label>
			<input
				id={inputId}
				placeholder={placeholderText}
				className={`border border-grey-600 p-2 rounded-md ${
					width ? `w-[${width}%]` : 'w-[55%]'
				}  block ${marginRight && `mr-${marginRight}`} ${
					marginBottom ? `mb-${marginBottom}` : 'mb-0'
				}`}
				onChange={onChange}
				ref={ref}
				type={type}
			/>
		</>
	)
);

export default Input;

Input.propTypes = {
	width: PropTypes.number,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	marginRight: PropTypes.number,
	marginBottom: PropTypes.number,
	alignSelf: PropTypes.string,
};

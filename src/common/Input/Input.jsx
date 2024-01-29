import PropTypes from 'prop-types';

const Input = ({
	placeholderText,
	width,
	labelText,
	inputId,
	onChange,
	refValue,
	type,
	marginRight,
	marginBottom,
	alignSelf,
}) => (
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
			ref={refValue}
			type={type}
		/>
	</>
);

export default Input;

Input.propTypes = {
	width: PropTypes.number,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	refValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	type: PropTypes.string,
	marginRight: PropTypes.number,
	marginBottom: PropTypes.number,
	alignSelf: PropTypes.string,
};

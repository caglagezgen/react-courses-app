import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, width, margin, title }) => (
	<button
		onClick={onClick}
		style={{
			width: width ? `${width}rem` : '8rem',
			margin: margin ? `${margin}px` : 0,
		}}
		className={`w-36
  border border-blue-700 h-10 rounded-md hover:bg-blue-700 hover:text-white transition-all ease-linear duration-75`}
		title={title}
	>
		{buttonText}
	</button>
);

export default Button;

Button.propTypes = {
	buttonText: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.object.isRequired,
	]),
	onClick: PropTypes.func,
	width: PropTypes.number,
	margin: PropTypes.number,
	title: PropTypes.string,
};

import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, icon }) => (
	<button
		onClick={onClick}
		className='w-36
  border border-purple-700 h-10 rounded-md hover:bg-purple-700 hover:text-white transition-all ease-linear duration-75'
	>
		{icon && <img src={icon} className='w-10 mr-5' alt='' />}
		{buttonText}
	</button>
);

export default Button;

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

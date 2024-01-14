import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({ buttonText, onClick, icon }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{icon && <img src={icon} className={styles.buttonImg} alt='' />}
			{buttonText}
		</button>
	);
}

Button.propTypes = {
	buttonText: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.string,
};

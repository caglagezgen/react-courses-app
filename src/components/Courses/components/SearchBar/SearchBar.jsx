import React from 'react';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import { BUTTON_SEARCH, BUTTON_ADD_NEW_COURSE } from 'constants';
import styles from './SearchBar.module.css';

export function SearchBar({ value, onInputChange, onSearch }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch();
	};
	return (
		<div className={styles.searchContainer} onSubmit={handleSubmit}>
			<div className={styles.searchButtonInput}>
				<Input
					value={value}
					onChange={onInputChange}
					placeholder='Search for courses by title or id..'
				/>
				<Button buttonText={BUTTON_SEARCH} onClick={onSearch} />
			</div>
			<Button className={styles.addButton} buttonText={BUTTON_ADD_NEW_COURSE} />
		</div>
	);
}

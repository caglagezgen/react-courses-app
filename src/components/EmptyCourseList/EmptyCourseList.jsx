import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './EmptyCourseList.module.css';
import { BUTTON_ADD_NEW_COURSE } from 'constants';

export function EmptyCourseList({ onAddCourseClick }) {
	return (
		<div className={styles.emptyContainer}>
			<h2>Your List is Empty</h2>
			<p>Please use "Add new Course" button to add your first course</p>
			<Button buttonText={BUTTON_ADD_NEW_COURSE} onClick={onAddCourseClick} />
		</div>
	);
}

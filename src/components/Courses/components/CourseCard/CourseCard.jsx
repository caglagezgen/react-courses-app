import React from 'react';
import styles from './CourseCard.module.css';
import { Button } from 'common/Button/Button';
import editIcon from '../../../../assets/icons/icons-edit.png';
import deleteIcon from '../../../../assets/icons/delete.png';
import { BUTTON_SHOW_DETAILS } from 'constants';

export function CourseCard({ course, authors, onShowDetailsClick }) {
	// prepare list of authors name
	const authorsNames = authors
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name)
		.join(',');

	// convert duration from minutes to hours and minutes format
	const durationHours = Math.floor(course.duration / 60);
	const durationMinutes = course.duration % 60;
	return (
		<div className={styles.courseCard}>
			<div className={styles.actions}>
				<Button
					icon={editIcon}
					onClick={() => console.log(`Edit ${course.title}`)}
				/>
				<Button
					icon={deleteIcon}
					onClick={() => console.log(`Delete ${course.title}`)}
				/>
			</div>
			<h2>{course.title}</h2>
			<div className={styles.author}>Authors: {authorsNames}</div>
			<div className={styles.duration}>
				Duration: {durationHours}h {durationMinutes}
			</div>
			<div className={styles.creationDate}>
				Created: {new Date(course.creationDate).toLocaleDateString()}
			</div>
			<p>{course.description}</p>
			<Button
				buttonText={BUTTON_SHOW_DETAILS}
				onClick={() => onShowDetailsClick(course)}
			/>
		</div>
	);
}

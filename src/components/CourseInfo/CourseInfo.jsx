import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './CourseInfo.module.css';

export function CourseInfo({ course, authors, onBackClick }) {
	const authorsNames = authors
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name)
		.join(',');
	const durationHours = Math.floor(course.duration / 60);
	const durationMinutes = course.duration % 60;

	return (
		<div className={styles.courseCard}>
			<h2>{course.title}</h2>
			<p>{course.description}</p>
			<p>ID: {course.id}</p>
			<p>
				Duration: {durationHours}h {durationMinutes}
			</p>
			<p>Created: {new Date(course.creationDate).toLocaleDateString()}</p>
			<p>Authors: {authorsNames}</p>
			<Button buttonText='Back' onClick={onBackClick} />
		</div>
	);
}

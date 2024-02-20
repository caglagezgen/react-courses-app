import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../common/Button/Button';

import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import findAuthorsById from '../../helpers/findAuthorsById';

import { getCoursesSelector } from 'store/courses/selectors';
import { getAuthorsSelector } from 'store/authors/selectors';

import { BACK_TO_COURSES_BUTTON_TEXT } from '../../constants';

const CourseInfo = () => {
	const [course, setCourse] = useState(useSelector(getCoursesSelector));
	const [courseAuthors, setCourseAuthors] = useState();

	const courses = useSelector(getCoursesSelector);
	const authors = useSelector(getAuthorsSelector);

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setCourse(() => {
			const selectedCourse = courses.find(
				(course) => course.id === params.courseId
			);
			setCourseAuthors(findAuthorsById(authors, selectedCourse?.authors));
			return selectedCourse;
		});
	}, [authors, courses, params.courseId]);

	return (
		<>
			<div className='ml-32'>
				<Button
					buttonText={BACK_TO_COURSES_BUTTON_TEXT}
					marginLeft={32}
					onClick={() => navigate('/courses')}
				/>
			</div>
			<h1 className='text-2xl font-bold text-center mb-8'>{course?.title}</h1>
			<div className='w-[80%] m-auto grid grid-cols-2 gap-24'>
				<div>
					<p>{course?.description}</p>
				</div>
				<div>
					<p>
						<strong>ID: </strong>
						{course?.id}
					</p>
					<p>
						<strong>Duration:</strong> {getCourseDuration(course?.duration)}{' '}
						hours
					</p>
					<p>
						<strong>Created:</strong> {formatCreationDate(course?.creationDate)}
					</p>
					<p>
						<strong>Authors:</strong>
						{courseAuthors?.map((author, idx) => (
							<span key={uuidv4()}>
								{' '}
								{author?.name}
								{courseAuthors.length === idx + 1 ? '' : ','}
							</span>
						))}
					</p>
				</div>
			</div>
		</>
	);
};

export default CourseInfo;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../common/Button/Button';

import getCourseDuration from '../../helpers/getCourseDuration';
import formatCreationDate from '../../helpers/formatCreationDate';
import findAuthorsById from '../../helpers/findAuthorsById';

import { getCourse } from '../../store/course/thunk';
import { clearCurrentCourse } from '../../store/course/actions';
import { getCourseSelector } from '../../store/course/selectors';
import { getAuthorsSelector } from '../../store/authors/selectors';

import { BACK_TO_COURSES_BUTTON_TEXT } from '../../constants';

const CourseInfo = () => {
	const [courseAuthors, setCourseAuthors] = useState([]);

	const authors = useSelector(getAuthorsSelector);
	const course = useSelector(getCourseSelector);

	const params = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getCourse(params.courseId));

		return () => {
			dispatch(clearCurrentCourse());
		};
	}, [params.courseId, authors, dispatch]);

	useEffect(() => {
		setCourseAuthors(findAuthorsById(authors, course.authors));
	}, [authors, course.authors]);

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

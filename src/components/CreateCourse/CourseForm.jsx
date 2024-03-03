import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';

import CourseDescription from './components/Description/CourseDescription';
import CourseTitle from './components/CourseTitle/CourseTitle';
import AddNewAuthor from './components/AddNewAuthor/AddNewAuthor';
import CourseDuration from './components/CourseDuration/CourseDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import Authors from './components/Authors/Authors';

import { getCourse } from '../../store/course/thunk';
import { getCourseSelector } from '../../store/course/selectors';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import { getAuthorsSelector } from '../../store/authors/selectors';
import { getCoursesSelector } from '../../store/courses/selectors';
// import { getUserSelector } from '../../store/user/selectors';
import findAuthorsById from '../../helpers/findAuthorsById';

import {
	CREATE_COURSE_BUTTON_TEXT,
	UPDATE_COURSE_BUTTON_TEXT,
} from '../../constants';

const CourseForm = () => {
	const authors = useSelector(getAuthorsSelector);
	const courses = useSelector(getCoursesSelector);
	const course = useSelector(getCourseSelector);

	// const [course, setCourse] = useState();
	const [formType, setFormType] = useState();
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const [showDescriptionError, setShowDescriptionError] = useState(false);
	const [showTitleError, setShowTitleError] = useState(false);
	const [showAuthorError, setShowAuthorError] = useState(false);

	const descriptionRef = useRef();
	const newAuthorRef = useRef();
	const titleRef = useRef();

	const location = useLocation();

	const params = useParams();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		setFormType(location.pathname.split('/')[2]);

		if (formType === 'update') {
			dispatch(getCourse(params.courseId));

			setCourseAuthors(findAuthorsById(authors, course.authors));

			titleRef.current.value = course.title;
			descriptionRef.current.value = course.description;

			setDuration(course.duration);
		}
	}, [
		authors,
		location.pathname,
		params.courseId,
		formType,
		dispatch,
		course.title,
		course.description,
		course.duration,
		course.authors,
	]);

	const submitForm = () => {
		const courseNameExists = courses.some(
			(course) => course.title === titleRef.current.value
		);

		if (
			titleRef.current.value === '' ||
			descriptionRef.current.value === '' ||
			duration === undefined ||
			duration === 0 ||
			courseAuthors.length === 0 ||
			showDescriptionError ||
			showTitleError ||
			courseNameExists
		) {
			alert(
				courseNameExists
					? 'Course with this title already exists'
					: 'Please fill all the fields'
			);
		} else {
			if (formType === 'add') {
				dispatch(
					addCourse(
						titleRef.current.value,
						descriptionRef.current.value,
						duration,
						courseAuthors.map((courseAuthor) => courseAuthor.id)
					)
				);
			}
			if (formType === 'update') {
				dispatch(
					updateCourse(params.courseId, {
						title: titleRef.current.value,
						description: descriptionRef.current.value,
						duration,
						authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
					})
				);
			}
			navigate('/courses');
		}
	};

	return (
		<div className='mx-10 mb-5'>
			<div className='grid grid-cols-2'>
				<CourseTitle
					titleRef={titleRef}
					showTitleError={showTitleError}
					setShowTitleError={setShowTitleError}
				/>
				<div className='flex justify-end items-end'>
					<Button
						buttonText={
							formType === 'add'
								? CREATE_COURSE_BUTTON_TEXT
								: UPDATE_COURSE_BUTTON_TEXT
						}
						onClick={submitForm}
					/>
				</div>
			</div>
			<CourseDescription
				descriptionRef={descriptionRef}
				setShowDescriptionError={setShowDescriptionError}
				showDescriptionError={showDescriptionError}
			/>
			<div className='border border-black mt-5 rounded-md'>
				<div className='grid grid-cols-2 gap-10 p-6'>
					<div>
						<AddNewAuthor
							newAuthorRef={newAuthorRef}
							showAuthorError={showAuthorError}
							setShowAuthorError={setShowAuthorError}
							setCourseAuthors={setCourseAuthors}
							courseAuthors={courseAuthors}
							authors={authors}
						/>
						<CourseDuration duration={duration} setDuration={setDuration} />
					</div>
					<div className='w-[65%] mx-auto'>
						<Authors authors={authors} setCourseAuthors={setCourseAuthors} />
						<CourseAuthors
							authors={authors}
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseForm;

CourseForm.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	addNewCourse: PropTypes.func,
	updateAuthors: PropTypes.func,
};

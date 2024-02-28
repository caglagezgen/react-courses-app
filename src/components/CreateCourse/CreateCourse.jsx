import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';

import CourseDescription from './components/Description/CourseDescription';
import CourseTitle from './components/CourseTitle/CourseTitle';
import AddNewAuthor from './components/AddNewAuthor/AddNewAuthor';
import CourseDuration from './components/CourseDuration/CourseDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import Authors from './components/Authors/Authors';

import { addCourseAction } from '../../store/courses/actions';
import { addAuthorAction } from '../../store/authors/actions';
import { getAuthorsSelector } from '../../store/authors/selectors';
import { getCoursesSelector } from '../../store/courses/selectors';

import { CREATE_COURSE_BUTTON_TEXT } from '../../constants';

const CreateCourse = () => {
	const authors = useSelector(getAuthorsSelector);
	const courses = useSelector(getCoursesSelector);

	const [courseAuthors, setCourseAuthors] = useState([]);
	const [newAuthors, setNewAuthors] = useState([]);
	const [duration, setDuration] = useState();
	const [showDescriptionError, setShowDescriptionError] = useState(false);
	const [showTitleError, setShowTitleError] = useState(false);
	const [showAuthorError, setShowAuthorError] = useState(false);

	const descriptionRef = useRef();
	const newAuthorRef = useRef();
	const titleRef = useRef();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const createNewCourse = () => {
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
			dispatch(
				addCourseAction({
					id: uuidv4(),
					title: titleRef.current.value,
					description: descriptionRef.current.value,
					duration,
					creationDate: new Date().toDateString(),
					authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
				})
			);

			const newlyCreatedAuthors = newAuthors.filter((newAuthor) =>
				courseAuthors.includes(newAuthor)
			);

			newlyCreatedAuthors.forEach((newlyCreatedAuthor) =>
				dispatch(addAuthorAction(newlyCreatedAuthor))
			);

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
					createNewCourse={createNewCourse}
				/>
				<div className='flex justify-end items-end'>
					<Button
						buttonText={CREATE_COURSE_BUTTON_TEXT}
						onClick={createNewCourse}
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
							setNewAuthors={setNewAuthors}
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
							setNewAuthors={setNewAuthors}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;

CreateCourse.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	addNewCourse: PropTypes.func,
	updateAuthors: PropTypes.func,
};

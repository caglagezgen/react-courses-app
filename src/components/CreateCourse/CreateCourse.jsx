import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../common/Button/Button';

import CourseDescription from './components/Description/CourseDescription';
import CourseTitle from './components/CourseTitle/CourseTitle';
import AddNewAuthor from './components/AddNewAuthor/AddNewAuthor';
import CourseDuration from './components/CourseDuration/CourseDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import Authors from './components/Authors/Authors';

import { CREATE_COURSE_BUTTON_TEXT } from '../../constants';

const CreateCourse = ({ authors, addNewCourse, updateAuthors }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [newAuthors, setNewAuthors] = useState([]);
	const [existingAuthors, setExistingAuthors] = useState(authors);
	const [duration, setDuration] = useState();
	const [showDescriptionError, setShowDescriptionError] = useState(false);
	const [showTitleError, setShowTitleError] = useState(false);
	const [showAuthorError, setShowAuthorError] = useState(false);

	const descriptionRef = useRef();
	const newAuthorRef = useRef();
	const titleRef = useRef();

	const navigate = useNavigate();

	const createNewCourse = () => {
		if (
			titleRef.current.value === '' ||
			descriptionRef.current.value === '' ||
			duration === undefined ||
			duration === '' ||
			courseAuthors.length === 0 ||
			showDescriptionError ||
			showTitleError
		) {
			alert('Please fill all the fields');
		} else {
			addNewCourse({
				id: uuidv4(),
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				duration,
				creationDate: new Date().toDateString(),
				authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
			});
			updateAuthors(newAuthors);
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
							ref={newAuthorRef}
							showAuthorError={showAuthorError}
							setShowAuthorError={setShowAuthorError}
							setNewAuthors={setNewAuthors}
							setCourseAuthors={setCourseAuthors}
							courseAuthors={courseAuthors}
							existingAuthors={existingAuthors}
						/>
						<CourseDuration duration={duration} setDuration={setDuration} />
					</div>
					<div className='w-[65%] mx-auto'>
						<Authors
							existingAuthors={existingAuthors}
							setCourseAuthors={setCourseAuthors}
							setExistingAuthors={setExistingAuthors}
						/>
						<CourseAuthors
							authors={authors}
							courseAuthors={courseAuthors}
							setCourseAuthors={setCourseAuthors}
							setExistingAuthors={setExistingAuthors}
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

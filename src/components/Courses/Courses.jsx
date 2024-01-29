import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';

import findAuthorsById from '../../helpers/findAuthorsById';

import {
	SEARCH_BUTTON_TEXT,
	ADD_NEW_COURSE_BUTTON_TEXT,
} from '../../constants';

const Courses = ({
	courses,
	authors,
	resetCoursesState,
	searchedCoursesRef,
	searchThroughCourses,
}) => {
	return (
		<div className='flex-col'>
			<div className='grid grid-cols-2'>
				<div className='flex items-center justify-around mx-10'>
					<SearchBar marginRight={4} searchedCoursesRef={searchedCoursesRef} />
					<Button
						buttonText={SEARCH_BUTTON_TEXT}
						onClick={searchThroughCourses}
					/>
				</div>
				<div className='flex justify-end mx-10'>
					<Link to='/courses/add'>
						<Button
							buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
							onClick={resetCoursesState}
						/>
					</Link>
				</div>
			</div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					description={course.description}
					creationDate={course.creationDate}
					duration={course.duration}
					authors={findAuthorsById(authors, course.authors)}
				/>
			))}
		</div>
	);
};

export default Courses;

Courses.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	courses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			duration: PropTypes.number,
			creationDate: PropTypes.string,
			authors: PropTypes.arrayOf(PropTypes.string),
		})
	),
	resetCoursesState: PropTypes.func,
	searchedCoursesRef: PropTypes.object,
	searchThroughCourses: PropTypes.func,
};

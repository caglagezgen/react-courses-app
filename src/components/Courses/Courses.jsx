import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';

import { getUserSelector } from '../../store/user/selectors';
import { getCoursesSelector } from '../../store/courses/selectors';
import { getAuthorsSelector } from '../../store/authors/selectors';
import findAuthorsById from '../../helpers/findAuthorsById';

import {
	SEARCH_BUTTON_TEXT,
	ADD_NEW_COURSE_BUTTON_TEXT,
} from '../../constants';

const Courses = () => {
	const [filterableCourses, setFilterableCourses] = useState();

	const allCourses = useSelector(getCoursesSelector);
	const authors = useSelector(getAuthorsSelector);
	const loggedUser = useSelector(getUserSelector);

	const searchedCoursesRef = useRef();

	const searchThroughCourses = () => {
		if (searchedCoursesRef.current.value === '') {
			setFilterableCourses(allCourses);
		} else {
			setFilterableCourses(filterCourses(allCourses, searchedCoursesRef));
		}
	};

	useEffect(() => {
		//Runs on initial render and when course is deleted
		if (searchedCoursesRef.current.value === '') {
			setFilterableCourses(allCourses);
		} else {
			setFilterableCourses(filterCourses(allCourses, searchedCoursesRef));
		}
	}, [allCourses]);

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
				{loggedUser.role === 'admin' && (
					<div className='flex justify-end mx-10'>
						<Link to='/courses/add'>
							<Button
								buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
								onClick={() => setFilterableCourses(allCourses)}
							/>
						</Link>
					</div>
				)}
			</div>
			{filterableCourses?.map((course) => (
				<CourseCard
					key={uuidv4()}
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

function filterCourses(courses, searchedCoursesRef) {
	return courses.filter(
		(course) =>
			course.title
				.toLowerCase()
				.includes(searchedCoursesRef.current.value.toLowerCase()) ||
			course.id === searchedCoursesRef.current.value
	);
}

export default Courses;

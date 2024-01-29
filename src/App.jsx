import { useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './../src/components/Header/Header.jsx';

import AllRoutes from './routes/AllRoutes';

import { mockedCoursesList, mockedAuthorsList } from './constants';

const App = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [filteredCourses, setFilteredCourses] = useState();
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const searchedCoursesRef = useRef();

	const addNewCourse = (newCourse) => {
		setCourses((previousState) => {
			return [...previousState, newCourse];
		});
	};

	const searchThroughCourses = () => {
		if (searchedCoursesRef.current.value === '') {
			setFilteredCourses(courses);
		} else {
			setFilteredCourses(() =>
				courses.filter(
					(course) =>
						course.title.toLowerCase() ===
							searchedCoursesRef.current.value.toLowerCase() ||
						course.id === searchedCoursesRef.current.value
				)
			);
		}
	};

	const updateAuthors = (updatedAuthors) => {
		setAuthors((previousState) => {
			return [...previousState, ...updatedAuthors];
		});
	};

	return (
		<Router>
			<Header />
			<AllRoutes
				courses={courses}
				filteredCourses={filteredCourses}
				authors={authors}
				setFilteredCourses={setFilteredCourses}
				searchThroughCourses={searchThroughCourses}
				searchedCoursesRef={searchedCoursesRef}
				addNewCourse={addNewCourse}
				updateAuthors={updateAuthors}
			/>
		</Router>
	);
};

export default App;

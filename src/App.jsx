import React, { useState } from 'react';
import { Courses } from 'components/Courses/Courses';
import './App.css';
import { Header } from './components/Header/Header';
import { CourseInfo } from 'components/CourseInfo/CourseInfo';
import { mockedCoursesList, mockedAuthorsList } from './constants';

function App() {
	const [selectedCourse, setSelectedCourse] = useState(null);

	const handleShowDetails = (course) => {
		setSelectedCourse(course);
	};

	const handleBackClick = () => {
		setSelectedCourse(null);
	};

	return (
		<div>
			<Header />
			{selectedCourse ? (
				<CourseInfo
					course={selectedCourse}
					authors={mockedAuthorsList}
					onBackClick={handleBackClick}
				/>
			) : (
				<Courses
					courses={mockedCoursesList}
					authors={mockedAuthorsList}
					onShowDetailsClick={handleShowDetails}
				/>
			)}
		</div>
	);
}

export default App;

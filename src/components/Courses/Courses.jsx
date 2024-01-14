import React, { useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import { CourseInfo } from 'components/CourseInfo/CourseInfo';
import { SearchBar } from './components/SearchBar/SearchBar';

export function Courses({ courses, authors }) {
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses);

	const showCourseInfo = (course) => {
		setSelectedCourse(course);
	};

	if (selectedCourse) {
		return (
			<CourseInfo
				course={selectedCourse}
				authors={authors}
				onBackClick={() => setSelectedCourse(null)}
			/>
		);
	}

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSearch = () => {
		if (searchValue) {
			const lowerCaseSearchValue = searchValue.toLowerCase();
			const matchedCourses = courses.filter((course) =>
				course.title.toLowerCase().includes(lowerCaseSearchValue)
			);
			setFilteredCourses(matchedCourses);
		} else {
			setFilteredCourses(courses);
		}
	};

	return (
		<div>
			<SearchBar
				value={searchValue}
				onInputChange={handleInputChange}
				onSearch={handleSearch}
			/>
			{filteredCourses.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authors={authors}
					onShowDetailsClick={showCourseInfo}
				/>
			))}
		</div>
	);
}

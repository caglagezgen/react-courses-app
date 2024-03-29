import PropTypes from 'prop-types';
import Button from '../../../../common/Button/Button';

import { DELETE_AUTHOR_BUTTON_TEXT } from '../../../../constants';

const CourseAuthors = ({ courseAuthors, setCourseAuthors, setNewAuthors }) => {
	const deleteCourseAuthor = (courseAuthor) => {
		console.log(courseAuthors);
		setCourseAuthors((previousState) =>
			previousState.filter((author) => author !== courseAuthor)
		);
		// setNewAuthors((previousState) =>
		// 	previousState.filter((newAuthor) => newAuthor.name !== courseAuthor.name)
		// );
	};
	return (
		<>
			<p className='text-center font-bold mt-5'>Course authors</p>
			<div className='text-center text-sm mt-5'>
				{courseAuthors.length === 0 && 'Authors list is empty'}
				{courseAuthors.map((courseAuthor, idx) => (
					<div className='flex justify-between mt-5' key={idx}>
						<p>{courseAuthor.name}</p>{' '}
						<Button
							buttonText={DELETE_AUTHOR_BUTTON_TEXT}
							onClick={() => deleteCourseAuthor(courseAuthor)}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default CourseAuthors;

CourseAuthors.propTypes = {
	courseAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	setCourseAuthors: PropTypes.func,
	setNewAuthors: PropTypes.func,
};

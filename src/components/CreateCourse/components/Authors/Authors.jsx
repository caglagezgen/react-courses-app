import PropTypes from 'prop-types';

import AuthorItem from '../AuthorItem/AuthorItem';

const Authors = ({ authors, setCourseAuthors }) => {
	const addAuthorFromTheExistingList = (author) => {
		setCourseAuthors((previousState) => {
			if (!previousState.includes(author)) {
				return [...previousState, author];
			} else {
				return previousState;
			}
		});
	};

	return (
		<>
			<p className='text-center font-bold mb-5'>Authors</p>
			<AuthorItem authors={authors} addAuthor={addAuthorFromTheExistingList} />
		</>
	);
};

export default Authors;

Authors.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	setExistingAuthors: PropTypes.func,
	setCourseAuthors: PropTypes.func,
	existingAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

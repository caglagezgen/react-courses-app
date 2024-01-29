import PropTypes from 'prop-types';

import AuthorItem from '../AuthorItem/AuthorItem';

const Authors = ({ existingAuthors, setCourseAuthors, setExistingAuthors }) => {
	const addAuthorFromTheExistingList = (author) => {
		setCourseAuthors((previousState) => {
			if (!previousState.includes(author)) {
				return [...previousState, author];
			} else {
				return previousState;
			}
		});
		setExistingAuthors((previousState) => {
			return previousState.filter(
				(existingAuthor) => existingAuthor.name !== author.name
			);
		});
	};

	return (
		<>
			<p className='text-center font-bold mb-5'>Authors</p>
			<AuthorItem
				authors={existingAuthors}
				addAuthor={addAuthorFromTheExistingList}
			/>
		</>
	);
};

export default Authors;

Authors.propTypes = {
	setExistingAuthors: PropTypes.func,
	setCourseAuthors: PropTypes.func,
	existingAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

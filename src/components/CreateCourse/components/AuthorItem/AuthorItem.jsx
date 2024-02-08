import PropTypes from 'prop-types';

import Button from '../../../../common/Button/Button';

import { ADD_AUTHOR_BUTTON_TEXT } from '../../../../constants';

const AuthorItem = ({ authors, addAuthor }) => (
	<>
		{authors.map((author) => (
			<div key={author.id} className='flex justify-between py-2'>
				<p>{author.name}</p>
				<Button
					buttonText={ADD_AUTHOR_BUTTON_TEXT}
					onClick={() => addAuthor(author)}
				/>
			</div>
		))}
	</>
);

export default AuthorItem;

AuthorItem.propTypes = {
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	addAuthor: PropTypes.func,
};

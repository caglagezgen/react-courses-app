import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { CREATE_AUTHOR_BUTTON_TEXT } from '../../../../constants';

const AddNewAuthor = ({
	newAuthorRef,
	showAuthorError,
	setShowAuthorError,
	setNewAuthors,
	courseAuthors,
	existingAuthors,
	setCourseAuthors,
}) => {
	const onChangeAuthorName = (e) => {
		if (newAuthorRef.current.value.length < 2) {
			setShowAuthorError(true);
		} else {
			setShowAuthorError(false);
		}
	};

	const addNewAuthor = () => {
		if (newAuthorRef.current.value === '') {
			newAuthorRef.current.classList.add('placeholder:text-red-500');
			newAuthorRef.current.placeholder = '*This field must not be empty';
		} else if (
			!showAuthorError &&
			newAuthorRef.current.value !== '' &&
			!courseAuthors.some(
				(courseAuthor) => courseAuthor.name === newAuthorRef.current.value
			) &&
			!existingAuthors.some(
				(existingAuthor) => existingAuthor.name === newAuthorRef.current.value
			)
		) {
			let newAuthor = {
				id: uuidv4(),
				name: newAuthorRef.current.value,
			};
			setCourseAuthors((previousState) => {
				return [...previousState, newAuthor];
			});

			setNewAuthors((previousState) => {
				return [...previousState, newAuthor];
			});
			newAuthorRef.current.value = '';
			newAuthorRef.current.classList.remove('placeholder:text-red-500');
			newAuthorRef.current.placeholder = 'Enter authors name';
		}
	};

	return (
		<div className='flex-col'>
			<p className='text-center font-bold'>Add author</p>
			<Input
				labelText='Author name'
				placeholderText='Enter authors name'
				inputId='authorName'
				width={100}
				refValue={newAuthorRef}
				onChange={onChangeAuthorName}
			/>
			{showAuthorError && (
				<p className='text-red-500 font-bold text-xs mt-2 ml-1'>
					Author name should have at least 2 characters
				</p>
			)}
			<div className='flex justify-center mt-5'>
				<Button buttonText={CREATE_AUTHOR_BUTTON_TEXT} onClick={addNewAuthor} />
			</div>
		</div>
	);
};

export default AddNewAuthor;

AddNewAuthor.propTypes = {
	newAuthorRef: PropTypes.object,
	showAuthorError: PropTypes.bool,
	setShowAuthorError: PropTypes.func,
	setNewAuthors: PropTypes.func,
	courseAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	existingAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	setCourseAuthors: PropTypes.func,
};

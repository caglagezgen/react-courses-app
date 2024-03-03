import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import apiService from '../../../../store/services';

import { CREATE_AUTHOR_BUTTON_TEXT } from '../../../../constants';
import { addAuthorAction } from '../../../../store/authors/actions';

const AddNewAuthor = ({
	newAuthorRef,
	showAuthorError,
	setShowAuthorError,
	// setNewAuthors,
	courseAuthors,
	authors,
	setCourseAuthors,
}) => {
	const dispatch = useDispatch();

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
			!authors.some(
				(existingAuthor) => existingAuthor.name === newAuthorRef.current.value
			)
		) {
			const addNew = async () => {
				const response = await apiService.addAuthor(newAuthorRef.current.value);
				const data = await response.json();

				setCourseAuthors((previousState) => {
					return [...previousState, data.result];
				});

				dispatch(addAuthorAction(data.result));
			};

			addNew();

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
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	setCourseAuthors: PropTypes.func,
};

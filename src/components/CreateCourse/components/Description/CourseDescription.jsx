import PropTypes from 'prop-types';

const CourseDescription = ({
	descriptionRef,
	showDescriptionError,
	setShowDescriptionError,
}) => {
	const onChangeDescription = (e) => {
		if (descriptionRef.current.value.length < 2) {
			setShowDescriptionError(true);
		} else {
			setShowDescriptionError(false);
		}
	};

	return (
		<div className='flex-col mt-5'>
			<p className='mb-2'>Description</p>
			<textarea
				ref={descriptionRef}
				placeholder='Enter description'
				className='border border-#111827-400 w-[100%] p-3 h-28 rounded-md'
				onChange={onChangeDescription}
			></textarea>
			{showDescriptionError && (
				<p className='text-red-500 font-bold text-xs mt-2 ml-1'>
					Description should have at least 2 characters
				</p>
			)}
		</div>
	);
};

export default CourseDescription;

CourseDescription.propTypes = {
	descriptionRef: PropTypes.object,
	showDescriptionError: PropTypes.bool,
	setShowDescriptionError: PropTypes.func,
};

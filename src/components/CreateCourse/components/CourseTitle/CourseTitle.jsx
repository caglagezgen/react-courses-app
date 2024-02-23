import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';

const CourseTitle = React.forwardRef(
	({ showTitleError, setShowTitleError }, titleRef) => {
		const onChangeTitle = (e) => {
			if (titleRef.current.value.length < 2) {
				setShowTitleError(true);
			} else {
				setShowTitleError(false);
			}
		};
		return (
			<div className='flex-col'>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					inputId='title'
					onChange={onChangeTitle}
					ref={titleRef}
				/>
				{showTitleError && (
					<p className='text-red-500 font-bold text-xs mt-2 ml-1'>
						Title should have at least 2 characters
					</p>
				)}
			</div>
		);
	}
);

export default CourseTitle;

CourseTitle.propTypes = {
	titleRef: PropTypes.object,
	showTitleError: PropTypes.bool,
	setShowTitleError: PropTypes.func,
};

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';

const SearchBar = forwardRef(({ marginRight, searchedCoursesRef }, ref) => (
	<Input
		placeholderText='Enter course name or Id'
		width={100}
		marginRight={marginRight}
		ref={ref}
	/>
));

export default SearchBar;

SearchBar.propTypes = {
	marginRight: PropTypes.number,
	searchedCoursesRef: PropTypes.object,
};

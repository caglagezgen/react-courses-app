import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';

const SearchBar = ({ marginRight, searchedCoursesRef }) => (
	<Input
		placeholderText='Enter course name or Id'
		width={100}
		marginRight={marginRight}
		refValue={searchedCoursesRef}
	/>
);

export default SearchBar;

SearchBar.propTypes = {
	marginRight: PropTypes.number,
	searchedCoursesRef: PropTypes.object,
};

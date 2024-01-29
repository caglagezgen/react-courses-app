const getUserInfoFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default getUserInfoFromLocalStorage;

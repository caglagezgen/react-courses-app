const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default getUserFromLocalStorage;

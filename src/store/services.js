class APIService {
	getCourses() {
		return fetch(`${process.env.REACT_APP_API_UR}/courses/all`);
	}
	getAuthors() {
		return fetch(`${process.env.REACT_APP_API_UR}/authors/all`);
	}
}

const apiService = new APIService();

export default apiService;

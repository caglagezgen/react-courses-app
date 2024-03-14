const findAuthorsById = (authors, courseAuthorsIds) => {
	let courseAuthorsNames = [];
	courseAuthorsIds.forEach((courseAuthorId) => {
		courseAuthorsNames.push(
			authors.find((author) => author.id === courseAuthorId)
		);
	});
	return courseAuthorsNames;
};

export default findAuthorsById;

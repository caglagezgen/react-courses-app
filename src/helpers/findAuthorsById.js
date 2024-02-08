const findAuthorsById = (authors, courseAuthorsIds) => {
	let coureAuthorsNames = [];
	courseAuthorsIds.forEach((courseAuthorId) => {
		coureAuthorsNames.push(
			authors.find((author) => author.id === courseAuthorId)
		);
	});
	return coureAuthorsNames;
};

export default findAuthorsById;

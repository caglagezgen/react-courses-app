const formatCreationDate = (creationDate) => {
	const date = new Date(creationDate);
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
};

export default formatCreationDate;

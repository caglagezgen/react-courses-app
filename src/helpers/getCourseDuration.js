export function getCourseDuration(durationInMinutes) {
	const hours = Math.floor(durationInMinutes / 60);
	const minutes = durationInMinutes % 60;

	return (
		(hours < 10 ? `0${hours}` : hours) +
		':' +
		(minutes < 10 ? `0${minutes}` : minutes) +
		(hours === 1 ? ' hour' : ' hours')
	);
}

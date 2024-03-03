import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../../common/Button/Button';

import { deleteCourse } from '../../../../store/courses/thunk';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import { getUserSelector } from '../../../../store/user/selectors';

import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const loggedUser = useSelector(getUserSelector);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const showCourse = () => {
		navigate(`/courses/${id}`);
	};

	return (
		<div className='border border-grey-700 p-3 m-10 rounded-md'>
			<div className='grid grid-cols-5 gap-14'>
				<div className='col-span-3'>
					<h1 className='font-bold text-2xl p-3'>{title}</h1>
					<p className='p-3'>{description}</p>
				</div>
				<div className='col-span-2'>
					<div className='flex-col p-3'>
						<div>
							<p className='m-2 overflow-ellipsis overflow-hidden whitespace-nowrap'>
								<strong>Authors:</strong>
								{authors.map((author, idx) => (
									<span key={uuidv4()}>
										{' '}
										{author?.name}
										{authors.length === idx + 1 ? '' : ','}
									</span>
								))}
							</p>
							<p className='m-2'>
								<strong>Duration:</strong> {getCourseDuration(duration)} hours
							</p>
							<p className='m-2'>
								<strong>Created:</strong> {formatCreationDate(creationDate)}
							</p>
						</div>
						<div className='flex justify-center mt-5'>
							<Button
								buttonText={SHOW_COURSE_BUTTON_TEXT}
								onClick={showCourse}
								width={8}
								margin={5}
								title={`Show ${title} course`}
							/>
							{loggedUser.role === 'admin' && (
								<>
									<Link to={`/courses/update/${id}`} state='update'>
										<Button
											buttonText={<FontAwesomeIcon icon='edit' />}
											width={4}
											margin={5}
											title='Update course'
										/>
									</Link>
									<Button
										buttonText={<FontAwesomeIcon icon='trash-alt' />}
										width={4}
										margin={5}
										onClick={() => dispatch(deleteCourse(id))}
										title='Delete course'
									/>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	creationDate: PropTypes.string,
	duration: PropTypes.number,
	authors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
};

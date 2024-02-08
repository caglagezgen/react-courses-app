import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';

import getCourseDuration from '../../../../helpers/getCourseDuration';

const CourseDuration = ({ duration, setDuration }) => {
	return (
		<div className='flex-col mt-24'>
			<h2 className='text-center font-bold'>Duration</h2>
			<Input
				labelText='Duration'
				placeholderText='Enter duration in minutes'
				inputId='duration'
				width={100}
				onChange={(e) => setDuration(+e.target.value)}
				type='number'
			/>
			<p className='text-xl mt-5'>
				Duration:{' '}
				<span className='text-2xl font-bold'>
					{duration === undefined ? '00:00' : getCourseDuration(duration)}
				</span>{' '}
				hours
			</p>
		</div>
	);
};

export default CourseDuration;

CourseDuration.propType = {
	duration: PropTypes.number,
	setDuration: PropTypes.func,
};

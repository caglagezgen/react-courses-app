import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CourseCard from '../CourseCard';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../../../store';
import getCourseDuration from '../../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../../helpers/formatCreationDate';

describe('Course Card test suite', () => {
	let componentContainer;

	let course = {
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'Course Title',
		description: 'Course Description',
		creationDate: '2023-05-12T14:30:00.000Z',
		duration: 150,
		authors: [
			{
				id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				name: 'Vasiliy Dobkin',
			},
			{
				id: 'f762978b-61eb-4096-812b-ebde22838167',
				name: 'Nicolas Kim',
			},
		],
	};

	beforeEach(() => {
		const { container } = render(
			<Provider store={store}>
				<Router>
					<CourseCard
						id={course.id}
						title={course.title}
						description={course.description}
						creationDate={course.creationDate}
						duration={course.duration}
						authors={course.authors}
					/>
				</Router>
			</Provider>
		);
		componentContainer = container;
	});

	it('renders without crashing', () => {
		expect(componentContainer).toBeTruthy();
	});

	it('should display authors list', () => {
		const listItems = screen
			.getAllByTestId('authors-list')
			.map((li) => li.textContent);

		expect(listItems).toMatchInlineSnapshot(
			`
      Array [
        " Vasiliy Dobkin, Nicolas Kim",
      ]
    `
		);
	});

	it("should contain 'Course Title'", () => {
		expect(screen.queryByText('Course Title')).toBeInTheDocument();
	});

	it("should contain 'Course Description'", () => {
		expect(screen.queryByText('Course Description')).toBeInTheDocument();
	});

	it('should contain formatted course duration', () => {
		const formatedCourseDuration = getCourseDuration(course.duration);
		expect(
			screen.queryByText(`${formatedCourseDuration} hours`)
		).toBeInTheDocument();
	});

	it('should contain formatted creation date', () => {
		const formatedCreationDate = formatCreationDate(course.creationDate);
		expect(screen.queryByText(`${formatedCreationDate}`)).toBeInTheDocument();
	});
});

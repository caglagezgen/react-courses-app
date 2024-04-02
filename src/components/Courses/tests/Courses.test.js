import {
	BrowserRouter as Router,
	MemoryRouter,
	Route,
	Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../../constants';
import Courses from '../Courses';

// hide the console errors
let consoleError = jest.spyOn(console, 'error');
consoleError.mockImplementation(() => {});

describe('Courses test suite', () => {
	let componentContainer;
	let mockedState = {
		user: {
			user: {
				isAuth: true,
				name: '',
				email: 'admin@email.com',
				token: 'token',
				role: 'admin',
			},
		},
		courses: [
			{
				id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
				title: 'JavaScript',
				description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                          has been the industry's standard dummy text ever since the 1500s, when an unknown 
                          printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                          not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                          nchanged.`,
				creationDate: '08/03/2021',
				duration: 160,
				authors: [
					'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
					'f762978b-61eb-4096-812b-ebde22838167',
				],
			},
			{
				id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
				title: 'Angular',
				description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                          has been the industry's standard dummy text ever since the 1500s, when an unknown 
                          printer took a galley of type and scrambled it to make a type specimen book.`,
				creationDate: '10/11/2020',
				duration: 188,
				authors: [
					'df32994e-b23d-497c-9e4d-84e4dc02882f',
					'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				],
			},
		],
		authors: [
			{
				id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				name: 'Vasiliy Dobkin',
			},
			{
				id: 'f762978b-61eb-4096-812b-ebde22838167',
				name: 'Nicolas Kim',
			},
			{
				id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
				name: 'Anna Sidorenko',
			},
			{
				id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				name: 'Valentina Larina',
			},
		],
	};

	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	test('Number of CourseCards components rendered equal to length of courses array', () => {
		const { container } = render(
			<Router>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</Router>
		);
		componentContainer = container;
		const cards = componentContainer.getElementsByClassName('card');
		expect(cards.length).toBe(mockedStore.getState().courses.length);
	});

	test('CourseForm should be showed after a click on a button "Add new course"', async () => {
		const history = createMemoryHistory();

		const utils = render(
			<MemoryRouter initialEntries={['/courses']} history={history}>
				<Provider store={mockedStore}>
					<Routes>
						<Route
							path='/courses/add'
							element={<div data-testid='course-form'>CourseForm</div>}
						/>
						<Route path='/courses' element={<Courses />} />
					</Routes>
				</Provider>
			</MemoryRouter>
		);

		const addCourseButton = await utils.findByText(ADD_NEW_COURSE_BUTTON_TEXT);
		fireEvent.click(addCourseButton);

		expect(utils.getByTestId('course-form')).toBeInTheDocument();
	});
});

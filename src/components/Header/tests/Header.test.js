import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, act, cleanup } from '@testing-library/react';
import { saveUserAction } from '../../../store/user/actions';
import store from '../../../store';
import Header from '../Header';

describe('Header Test suite', () => {
	let getByText;

	beforeEach(() => {
		localStorage.setItem(
			'user',
			JSON.stringify({
				token: 'token',
			})
		);
		const result = render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);
		getByText = result.getByText;
	});

	afterEach(() => {
		cleanup();
	});

	it("header contains user's name", async () => {
		await act(async () => {
			store.dispatch(
				saveUserAction({
					name: 'Test User',
					email: 'user@email.com',
					token: 'token',
					role: 'user',
				})
			);
		});

		expect(await screen.findByText('Test User')).toBeInTheDocument();
		screen.debug();
	});

	it('header contains logo', () => {
		const logo = getByText('REACT COURSES');
		expect(logo).toBeInTheDocument();
	});
});

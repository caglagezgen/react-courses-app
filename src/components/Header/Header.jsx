import { Button } from '../../common/Button/Button';
import styles from '../Header/Header.module.css';
import { Logo } from './components/Logo/Logo';
import { BRAND_NAME, BUTTON_LOGOUT } from 'constants';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.brandContainer}>
				<Logo className={styles.logo} />
				<h1 className={styles.brandName}>{BRAND_NAME}</h1>
			</div>
			<Button
				buttonText={BUTTON_LOGOUT}
				onClick={() => {
					console.log('Logging out...');
				}}
			/>
		</header>
	);
}

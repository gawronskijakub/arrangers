import Hamburger from '$/components/Hamburger';
import Navigation from '$/components/Navigation';

import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
	return (
		<header className={styles['Header']}>
			<h1 className={styles['Header__Title']}>Arrangers</h1>
			<Navigation />
			<Hamburger />
		</header>
	);
};

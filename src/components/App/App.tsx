import Footer from '@Components/Footer';
import Header from '@Components/Header';
import Main from '@Components/Main';

import styles from './App.module.scss';

export const App = (): JSX.Element => {
	return (
		<div className={styles['App']}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

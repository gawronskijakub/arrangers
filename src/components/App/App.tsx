import Footer from '$/components/Footer';
import Header from '$/components/Header';
import Main from '$/components/Main';

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

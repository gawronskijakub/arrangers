import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './App.scss';

export const App = (): JSX.Element => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

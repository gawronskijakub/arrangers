import styles from './Navigation.module.scss';

export const Navigation = (): JSX.Element => {
	return (
		<nav className={styles['Navigation']}>
			<ul>
				<li>
					<a href='#'>Start</a>
				</li>
				<li>
					<a href='#'>Services</a>
				</li>
				<li>
					<a href='#'>About us</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

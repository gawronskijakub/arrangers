import { MouseEvent } from 'react';
import styles from './Hamburger.module.scss';

export const Hamburger = (): JSX.Element => {
	const handleClick = (e: MouseEvent) => {
		e.currentTarget.classList.toggle(styles['Open']);
	};

	return (
		<button
			className={styles['Hamburger']}
			onClick={e => {
				handleClick(e);
			}}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

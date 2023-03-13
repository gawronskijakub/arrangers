import { MouseEvent } from 'react';
import navigationStyles from '@Components/Navigation/Navigation.module.scss';
import styles from './Hamburger.module.scss';

export const Hamburger = (): JSX.Element => {
	const handleClick = (e: MouseEvent) => {
		const currentTarget = e.currentTarget;

		currentTarget.classList.toggle(styles['Open']);
		currentTarget.previousElementSibling?.classList.toggle(
			navigationStyles['Open']
		);
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

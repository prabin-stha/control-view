import ReactDOM from 'react-dom';

import styles from './Overlay.module.css';

const Overlay = ({
	children,
	onOverlayClick,
}: {
	children: JSX.Element;
	onOverlayClick: () => void;
}) => {
	return ReactDOM.createPortal(
		<section onClick={onOverlayClick} className={styles.overlay}>
			{children}
		</section>,
		document.getElementById('overlay') as HTMLElement
	);
};

export { Overlay };

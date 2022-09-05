import styles from './Modal.module.css';

import { Overlay } from '../Overlay/Overlay';

const Modal = ({
	children,
	onOverlayClick,
}: {
	children: JSX.Element;
	onOverlayClick: () => void;
}) => {
	return (
		<Overlay onOverlayClick={onOverlayClick}>
			<div
				onClick={e => {
					e.stopPropagation();
				}}
				className={styles.modal}
			>
				{children}
			</div>
		</Overlay>
	);
};

export { Modal };

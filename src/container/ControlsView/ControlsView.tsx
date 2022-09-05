import CenterControls from './CenterControls';
import LeftControls from './LeftControls';
import RightControls from './RightControls';

import styles from './ControlsView.module.css';

const ControlsView = ({
	onOpenClickHandler,
}: {
	onOpenClickHandler: () => void;
}) => {
	return (
		<section className={styles.controlsView}>
			<div className={styles.controlsContainer}>
				<LeftControls onOpenClickHandler={onOpenClickHandler} />
				<CenterControls />
				<RightControls />
			</div>
		</section>
	);
};

export { ControlsView };

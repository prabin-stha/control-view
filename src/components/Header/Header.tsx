import ParticipantView from '../../enums/ParticipantsView';

import styles from './Header.module.css';

import view from '../../static/images/view.svg';

const Header = ({
	participantView,
	setParticipantView,
	showViewControls,
	toggleViewControl,
}: {
	participantView: ParticipantView;
	setParticipantView: (participantView: ParticipantView) => void;
	showViewControls: boolean;
	toggleViewControl: () => void;
}) => {
	return (
		<header unselectable='on' className={`unselectable ${styles.header}`}>
			<div onClick={toggleViewControl} className={styles.viewControls}>
				<div
					onClick={e => e.stopPropagation()}
					className={`${styles.viewLists} ${
						showViewControls && styles.show
					}`}
				>
					<div
						onClick={() => {
							setParticipantView(ParticipantView.STAGE_VIEW);
							toggleViewControl();
						}}
						className={`${styles.viewList} ${
							participantView === ParticipantView.STAGE_VIEW &&
							styles.active
						}`}
					>
						Stage View
					</div>
					<div
						onClick={() => {
							setParticipantView(ParticipantView.GRID_VIEW);
							toggleViewControl();
						}}
						className={`${styles.viewList} ${
							participantView === ParticipantView.GRID_VIEW &&
							styles.active
						}`}
					>
						Grid View
					</div>
				</div>
				<span className={styles.icon}>
					<img
						className={styles.icon}
						src={view}
						alt='View Icon'
						width={14}
					/>
				</span>
				View
			</div>
		</header>
	);
};

export { Header };

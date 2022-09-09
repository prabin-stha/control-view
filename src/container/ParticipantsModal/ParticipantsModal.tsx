import styles from './ParticipantsModal.module.css';

import addPerson from '../../static/images/addPerson.svg';
import close from '../../static/images/close.svg';
import shareLink from '../../static/images/shareLink.svg';
import Participant from './Participant/Participant';

// Takes in type of props as IParticipants
const ParticipantsModal = ({
	totalParticipants,
	activeParticipants,
	participants,
	onCloseClickHandler,
}: any) => {
	return (
		<div className={styles.participantsContainer}>
			<div className={styles.title}>
				<div className={styles.titleHeading}>1 of 1 in the call</div>
				<div className={styles.titleControls}>
					<img
						className={styles.icon}
						src={addPerson}
						alt='Add Paricipants'
					/>
					<img
						onClick={onCloseClickHandler}
						className={styles.icon}
						src={close}
						alt='Close Icon'
					/>
				</div>
			</div>
			<div className={styles.share}>
				<img
					className={styles.icon}
					src={shareLink}
					alt='Share Link Icon'
				/>
				<span className={styles.shareDesc}>
					Share a link for others to join
				</span>
			</div>
			<div className={styles.participants}>
				<div className={styles.participantsHeader}>ON THIS CALL</div>
				<Participant />
			</div>
		</div>
	);
};

export { ParticipantsModal };

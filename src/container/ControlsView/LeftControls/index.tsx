import styles from './LeftControls.module.css';

import inviteIcon from '../../../static/images/invite.svg';
import participantsIcon from '../../../static/images/participants.svg';
import recordIcon from '../../../static/images/record.svg';

const LeftControls = ({
	onOpenClickHandler,
}: {
	onOpenClickHandler: () => void;
}) => {
	return (
		<div className={styles.leftControlsContainer}>
			<button className={`${styles.control} ${styles.invite}`}>
				<div className={styles.icon}>
					<img src={inviteIcon} alt='Invite Icon' width='16px' />
				</div>
				<span>Invite</span>
			</button>
			<button
				disabled={true}
				className={`${styles.control} ${styles.record}`}
			>
				<div className={styles.icon}>
					<img src={recordIcon} alt='Record Icon' width='18px' />
				</div>
				<span>Record</span>
			</button>
			<button
				onClick={onOpenClickHandler}
				className={`${styles.control} ${styles.participants}`}
			>
				<div className={styles.icon}>
					<img
						src={participantsIcon}
						alt='Participants Icon'
						width='18px'
					/>
				</div>
				<span>Participants</span>
			</button>
		</div>
	);
};

export default LeftControls;

import styles from './Participant.module.css';

import audioDisabled from '../../../static/images/audioDisabled.svg';
import call from '../../../static/images/call.svg';
import pin from '../../../static/images/pin.svg';

const Participant = ({ image, status, name }: any) => {
	return (
		<div className={styles.participant}>
			<div className={styles.left}>
				<div className={styles.userProfileContainer}>
					<img
						className={styles.userProfile}
						src='https://img.cppng.com/download/2020-06/66726-customer-account-google-service-button-search-logo.png'
						alt='User Profile'
						width='36px'
					/>
					<div className={styles.status}></div>
				</div>
				<h4 className={styles.name}>Prabin Shrestha</h4>
			</div>
			<div className={styles.participantControls}>
				{
					<img
						className={styles.icon}
						src={pin}
						alt='Pin Icon'
						width='16px'
					/>
				}
				<img
					className={styles.icon}
					src={audioDisabled}
					alt='Audio Control Icon'
				/>
				<img className={styles.icon} src={call} alt='Call Icon' />
			</div>
		</div>
	);
};

export default Participant;

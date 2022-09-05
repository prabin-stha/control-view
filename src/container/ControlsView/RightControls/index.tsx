import styles from './RightControls.module.css';

import chat from '../../../static/images/chat.svg';
import handRaise from '../../../static/images/handRaise.svg';
import heart from '../../../static/images/heart.svg';
import more from '../../../static/images/more.svg';
import shareScreen from '../../../static/images/shareScreen.svg';

const RightControls = () => {
	return (
		<div className={styles.rightControlsContainer}>
			<button className={`${styles.control} ${styles.chat}`}>
				<div className={styles.icon}>
					<img src={chat} alt='Chat Icon' width='18px' />
				</div>
				<span>Chat</span>
			</button>
			<button className={`${styles.control} ${styles.shareScreen}`}>
				<div className={styles.icon}>
					<img
						src={shareScreen}
						alt='Screen Share Icon'
						width='18px'
					/>
				</div>
				<span>Share Screen</span>
			</button>
			<button className={`${styles.control} ${styles.raiseHand}`}>
				<div className={styles.icon}>
					<img src={handRaise} alt='Hand Raise Icon' width='18px' />
				</div>

				<span>Raise Hand</span>
			</button>
			<button className={`${styles.control} ${styles.react}`}>
				<div className={`${styles.icon} ${styles.hoverDisabled}`}>
					<img
						className={styles.heartIcon}
						src={heart}
						alt='Hand Raise Icon'
						width='18px'
					/>
				</div>
				<span>React</span>
			</button>
			<button className={`${styles.control} ${styles.more}`}>
				<div className={styles.icon}>
					<img src={more} alt='Three Dotted Icon' width='18px' />
				</div>

				<span>More</span>
			</button>
		</div>
	);
};

export default RightControls;

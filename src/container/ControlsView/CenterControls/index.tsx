import { useState } from 'react';

import styles from './CenterControls.module.css';

import arrowUp from '../../../static/images/arrowUp.svg';
import audioDisabled from '../../../static/images/audioDisabled.svg';
import audioEnabled from '../../../static/images/audioEnabled.svg';
import call from '../../../static/images/call.svg';
import videoDisabled from '../../../static/images/videoDisabled.svg';
import videoEnabled from '../../../static/images/videoEnabled.svg';

const CenterControls = () => {
	const [audioIsDisabled, setAudioIsDisabled] = useState(true);
	const [videoIsDisabled, setVideoIsDisabled] = useState(true);

	const audioClickHandler = () => {
		setAudioIsDisabled(state => !state);
	};

	const videoClickHandler = () => {
		setVideoIsDisabled(state => !state);
	};

	return (
		<div className={styles.centerControlsContainer}>
			<div className={styles.audioVideoControlsContainer}>
				<button className={styles.control}>
					<img
						onClick={audioClickHandler}
						className={`${styles.controlIcon} ${
							!audioIsDisabled && styles.enabled
						}`}
						src={audioIsDisabled ? audioDisabled : audioEnabled}
						alt='Audio'
					/>
					<img
						className={styles.arrowIcon}
						src={arrowUp}
						alt='Arrow Up'
					/>
				</button>
				<button className={styles.control}>
					<img
						onClick={videoClickHandler}
						className={`${styles.controlIcon} ${
							!videoIsDisabled && styles.enabled
						}`}
						src={videoIsDisabled ? videoDisabled : videoEnabled}
						alt='Audio'
					/>
					<img
						className={styles.arrowIcon}
						src={arrowUp}
						alt='Arrow Up'
					/>
				</button>
			</div>
			<img className={styles.callIcon} src={call} alt='Phone Call' />
		</div>
	);
};

export default CenterControls;

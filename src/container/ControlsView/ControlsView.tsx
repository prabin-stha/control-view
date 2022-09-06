import CenterControls from './CenterControls';
import LeftControls from './LeftControls';
import RightControls from './RightControls';

import styles from './ControlsView.module.css';

import { useState } from 'react';
import invite from '../../static/images/addPerson.svg';
import handRaise from '../../static/images/handRaise.svg';
import heart from '../../static/images/heart.svg';
import participants from '../../static/images/participants.svg';
import settings from '../../static/images/settings.svg';
import shareScreen from '../../static/images/shareScreen.svg';

const ControlsView = ({
	onOpenClickHandler,
	onMoreOptionsClickHandler,
	showMoreOptions,
}: {
	onOpenClickHandler: () => void;
	onMoreOptionsClickHandler: () => void;
	showMoreOptions: boolean;
}) => {
	return (
		<section className={styles.controlsView}>
			<div className={styles.controlsContainer}>
				{showMoreOptions && (
					<div className={styles.moreOptions}>
						<a
							className={`${styles.option} ${styles.invite}`}
							href='#null'
						>
							<img src={invite} alt='Invite Icon' width='16px' />
							Invite
						</a>
						<a
							className={`${styles.option} ${styles.participants}`}
							href='#null'
						>
							<img
								src={participants}
								alt='Participants Icon'
								width='18px'
							/>
							Participants
						</a>
						<a
							className={`${styles.option} ${styles.shareScreen}`}
							href='#null'
						>
							<img
								src={shareScreen}
								alt='Invite Icon'
								width='18px'
							/>
							Share Screen
						</a>
						<a
							className={`${styles.option} ${styles.handRaise}`}
							href='#null'
						>
							<img
								src={handRaise}
								alt='Hand Raise Icon'
								width='18px'
							/>
							Raise your Hand
						</a>
						<a
							className={`${styles.option} ${styles.react}`}
							href='#null'
						>
							<img src={heart} alt='Invite Icon' width='16px' />
							Show Reactions
						</a>
						<a
							className={`${styles.option} ${styles.settings}`}
							href='#null'
						>
							<img
								src={settings}
								alt='Settings Icon'
								width='18px'
							/>
							Audio & Video Settings
						</a>
					</div>
				)}
				<LeftControls onOpenClickHandler={onOpenClickHandler} />
				<CenterControls />
				<RightControls onClickMore={onMoreOptionsClickHandler} />
			</div>
		</section>
	);
};

export { ControlsView };

import { useState } from 'react';

import ParticipantView from '../../enums/ParticipantsView';
import GridView from './GridView/GridView';
import StageView from './StageView/StageView';

import styles from './ParticipantsView.module.css';

const ParticipantsView = ({
	participantView,
}: {
	participantView: ParticipantView;
}) => {
	const [audioIsEnabled, setAudioIsEnabled] = useState(false);

	const toggleAudioControl = () => {
		setAudioIsEnabled(state => !state);
	};

	return (
		<section className={styles.participantsView}>
			<div className={styles.participantsContainer}>
				{participantView === ParticipantView.STAGE_VIEW && (
					<StageView
						name='Prabin Shrestha'
						audioEnabled={audioIsEnabled}
						toggleAudioControl={toggleAudioControl}
					/>
				)}
				{participantView === ParticipantView.GRID_VIEW && <GridView />}
			</div>
		</section>
	);
};

export { ParticipantsView };

import { useState } from 'react';

import { Header, Modal } from './components';
import { ControlsView, ParticipantsModal, ParticipantsView } from './container';
import ParticipantView from './enums/ParticipantsView';

import styles from './App.module.css';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const [participantView, setParticipantView] = useState<ParticipantView>(
		ParticipantView.STAGE_VIEW
	);
	const [showViewControls, setShowViewControls] = useState(false);

	const onCloseClickHandler = () => {
		setModalIsOpen(false);
	};

	const onOpenClickHandler = () => {
		setModalIsOpen(true);
	};

	const onMoreClickHandler = () => {
		setShowMoreOptions(state => !state);
	};

	const toggleViewControl = () => {
		setShowViewControls(state => !state);
	};

	return (
		<div
			className='App'
			onClick={() => {
				showMoreOptions && setShowMoreOptions(false);
				showViewControls && setShowViewControls(false);
			}}
		>
			{modalIsOpen && (
				<Modal onOverlayClick={onCloseClickHandler}>
					<ParticipantsModal
						onCloseClickHandler={onCloseClickHandler}
					/>
				</Modal>
			)}
			<main className={styles.main}>
				<div className={styles.container}>
					<Header
						participantView={participantView}
						setParticipantView={setParticipantView}
						showViewControls={showViewControls}
						toggleViewControl={toggleViewControl}
					/>
					<ParticipantsView participantView={participantView} />
					<ControlsView
						showMoreOptions={showMoreOptions}
						onMoreOptionsClickHandler={onMoreClickHandler}
						onOpenClickHandler={onOpenClickHandler}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;

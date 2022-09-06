import { useState } from 'react';

import { Modal } from './components';
import { ControlsView, Participants } from './container';

import styles from './App.module.css';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	const onCloseClickHandler = () => {
		setModalIsOpen(false);
	};

	const onOpenClickHandler = () => {
		setModalIsOpen(true);
	};

	const onMoreClickHandler = () => {
		setShowMoreOptions(state => !state);
	};

	return (
		<div
			className='App'
			onClick={() => {
				showMoreOptions && setShowMoreOptions(false);
			}}
		>
			{modalIsOpen && (
				<Modal onOverlayClick={onCloseClickHandler}>
					<Participants onCloseClickHandler={onCloseClickHandler} />
				</Modal>
			)}
			<main className={styles.fill}>
				<ControlsView
					showMoreOptions={showMoreOptions}
					onMoreOptionsClickHandler={onMoreClickHandler}
					onOpenClickHandler={onOpenClickHandler}
				/>
			</main>
		</div>
	);
}

export default App;

import { useState } from 'react';

import { Modal } from './components';
import { ControlsView, Participants } from './container';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const onCloseClickHandler = () => {
		setModalIsOpen(false);
	};

	const onOpenClickHandler = () => {
		setModalIsOpen(true);
	};

	return (
		<div className='App'>
			{modalIsOpen && (
				<Modal onOverlayClick={onCloseClickHandler}>
					<Participants onCloseClickHandler={onCloseClickHandler} />
				</Modal>
			)}
			<main>
				<ControlsView onOpenClickHandler={onOpenClickHandler} />
			</main>
		</div>
	);
}

export default App;

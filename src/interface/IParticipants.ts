import IParticipant from './IParticipant';

interface INewParticipant extends IParticipant {
	id: string;
}

interface IParticipants {
	totalParticipants: number;
	activeParticipants: number;
	participants: INewParticipant[];
}

export default IParticipants;

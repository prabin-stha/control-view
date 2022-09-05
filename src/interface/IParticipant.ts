import ParticipantStatus from '../enums/ParticipantStatus';

interface IParticipant {
	image: string;
	status: ParticipantStatus;
	name: string;
}

export default IParticipant;

import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton({ clearForm }) {
	return (
		<CardButton className="journal-add" onClick={clearForm}>
			+ Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;

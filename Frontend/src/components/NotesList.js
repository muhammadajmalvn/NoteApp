import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes?notes.map((note) => (
				<Note
					title={note.title}
					text={note.body}
					id={note._id}
					handleDeleteNote={handleDeleteNote}
				/>
			)):" "}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;

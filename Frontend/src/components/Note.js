import { MdDeleteForever } from 'react-icons/md';

const Note = ({ title, text, id, handleDeleteNote }) => {
	return (
		<div className='note'>
			<p>{title}</p>
			<div>{text}</div>
			<div className='note-footer'>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;

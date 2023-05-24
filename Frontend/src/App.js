import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { GetNotesAPI, addNoteAPI, deleteNoteAPI } from './API/APICalls';
const App = () => {

	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		GetNotesAPI()
			.then(response => {
				const fetchedNotes = response.data;
				if (Array.isArray(fetchedNotes)) {
					setNotes(fetchedNotes);
				} else {
					setNotes([]);
				}
			})
			.catch(error => {
				console.log(error);
			});
	}, [notes]);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title, text) => {
		addNoteAPI(title, text).then(async (response) => {
			let newNotes = await GetNotesAPI()
			setNotes(newNotes)
		});
	};

	const deleteNote = async (id) => {
		const newNotes = await deleteNoteAPI(id)
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;

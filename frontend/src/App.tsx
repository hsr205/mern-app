import React from 'react';
import './App.css';
import {Note} from "./models/note"

function App() {

    let [notes, setNotes] = React.useState<Note[]>([]);

    React.useEffect(() => {
        async function loadNotes() {
            try {
                const response = await fetch('/api/notes', {method: "GET"});
                const notes = await response.json();
                setNotes(notes)
            } catch (error) {
                console.error(`Exception was thrown: ${error}`);
                alert(error.message);
            }
        }

        loadNotes();
    }, []);


    return (
        <div className="App">
            {JSON.stringify(notes)}
        </div>
    );
}

export default App;

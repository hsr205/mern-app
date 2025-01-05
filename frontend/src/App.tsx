import React from 'react';
import {Note as NoteModel} from "./models/note"
import NoteComponent from "./components/Note.tsx"
import {Container, Row} from "react-bootstrap";

function App() {

    let [notes, setNotes] = React.useState<NoteModel[]>([]);

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
        <Container>
            <Row xs={1} md={2} xl={3}>


                {notes.map(note => (
                    <NoteComponent note={note} key={note._id}/>
                ))}

            </Row>
        </Container>
    );
}

export default App;

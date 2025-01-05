import styles from '../styles/Note.module.css';
import {Note as NoteModel} from "../models/note";
import {Card} from "react-bootstrap";


interface NoteProperties {
    note: NoteModel;
}

const NoteComponent: React.FC = ({note}: NoteProperties) => {

    const noteTitle: string = note.noteTitle;
    const noteText: string = note.noteText;
    const noteCreatedAt: string = note.createdAt;
    const noteUpdatedAt: string = note.updatedAt;

    return (
        <Card className={styles.noteCard}>
            <Card.Body>
                <Card.Title>
                    {noteTitle}
                </Card.Title>

                <Card.Text className={styles.noteText}>
                    {noteText}
                </Card.Text>

                <Card.Footer>
                    Created At: {noteCreatedAt}
                </Card.Footer>

                <Card.Footer>
                    Updated At: {noteUpdatedAt}
                </Card.Footer>

            </Card.Body>
        </Card>
    );
}

export default NoteComponent;
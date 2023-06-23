import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
// Notes component uses the NoteContext to access the notestate and renders
// a list of notes by iterating over the notes array and rendering a Noteitem component for each note.
// har note k lie ek alg noteitem hota hai
function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
    }, [])
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {
                    notes.map((notes) => {
                        return <Noteitem notes={notes} />
                    })}
            </div>
        </>

    )
}

export default Notes

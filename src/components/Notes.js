import React, { useContext, useEffect, useRef, useState } from 'react'
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

    const ref = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        //the empty title dec tag will become equal to currNote
    }
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "default" })
    const handleClick = (e) => {
        console.log('updating note....', note)
        e.preventDefault();

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* to populate the updated note in those rows we are using value otherwise they'll remain empty */}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {
                    notes.map((notes) => {
                        return <Noteitem key={notes._id} updateNote={updateNote} notes={notes} />
                    })}
            </div>
        </>

    )
}

export default Notes

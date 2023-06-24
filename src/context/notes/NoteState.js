import NoteContext from "./NoteContext";
import { useState } from "react";
//we can't pull request for api directly from browser so we use cors package in backend
const NoteState = (props) => {
    const host = "http://localhost:3500"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //get all notes
    const getNotes = async () => {
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmU5NDNhNTVjNzg1NDc2MmIzZWNiIn0sImlhdCI6MTY4NTI1ODkwOH0.b9aEbMsrM9DbC1C72bn4NXmRYDM-TlqArb8z9ioVTzA"
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)

    }
    //add a note
    //when you call this addNote function and provide the title, description, and tag of a note, ...It concatenates the new note object to the existing list of notes (notes.concat(note)), creating a new array that includes the old notes as well as the newly added note.
    //here we r using same method to call API which we used in edit function


    const addNote = async (title, description, tag) => {
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmU5NDNhNTVjNzg1NDc2MmIzZWNiIn0sImlhdCI6MTY4NTI1ODkwOH0.b9aEbMsrM9DbC1C72bn4NXmRYDM-TlqArb8z9ioVTzA"

            },

            body: JSON.stringify({ title, description, tag }),
        });
        console.log("adding a note")
        const note = {
            "_id": "64679b59870de05cf3bbe111",
            "user": "6472e943a55c7854762b3ecb",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-05-31T19:09:13.005Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
        //yaha note add hojayega

    }

    //delete a note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmU5NDNhNTVjNzg1NDc2MmIzZWNiIn0sImlhdCI6MTY4NTI1ODkwOH0.b9aEbMsrM9DbC1C72bn4NXmRYDM-TlqArb8z9ioVTzA"

            },


        });
        const json = await response.json()
        console.log(json)
        console.log("deleting id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        //now we need to fetch api ...so  we have copied the below syntax from a website FETCH WITH HEADERS
        //here everything we are fetching from thunderclient
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmU5NDNhNTVjNzg1NDc2MmIzZWNiIn0sImlhdCI6MTY4NTI1ODkwOH0.b9aEbMsrM9DbC1C72bn4NXmRYDM-TlqArb8z9ioVTzA"

            },

            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json()
        // Logic to edit in client
        //whenever u face await error make the function async
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        //export krdo sbko
        //NoteContext.Provider component is used to wrap its child components. 
        // It provides the notes state, addNote, deleteNote, and editNote
        //{props.children} ==> exports child components
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}

        </NoteContext.Provider>
    )
}

export default NoteState;


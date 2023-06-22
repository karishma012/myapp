import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    const note = [
        {
            "_id": "647790d544b83925cfb4b09d",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title",
            "description": "hello everyone",
            "tag": "personal",
            "date": "2023-05-31T18:24:21.030Z",
            "__v": 0
        },
        {
            "_id": "640790f5f97bd330e450081c",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title",
            "description": "hello everyone",
            "tag": "personal",
            "date": "2023-05-31T18:24:53.756Z",
            "__v": 0
        },
        {
            "_id": "648790fef97bd330e450081e",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title",
            "description": "hello everyone",
            "tag": "personal",
            "date": "2023-05-31T18:25:02.698Z",
            "__v": 0
        },
        {
            "_id": "64679b59870de05cf3bbe111",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title is updated2",
            "description": "hello everyone rrr",
            "tag": "personal",
            "date": "2023-05-31T19:09:13.005Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(note)
    console.log("adding a new note")
    //add a note
    //when you call this addNote function and provide the title, description, and tag of a note, ...It concatenates the new note object to the existing list of notes (notes.concat(note)), creating a new array that includes the old notes as well as the newly added note.
    const addNote = (title, description, tag) => {
      
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
    const deleteNote = (id) => {
console.log("deleting id" + id)
const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    //edit a note
    const editNote = () => {

    }

    return (
        //export krdo sbko
        //NoteContext.Provider component is used to wrap its child components. 
        // It provides the notes state, addNote, deleteNote, and editNote
        //{props.children} ==> exports child components
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}

        </NoteContext.Provider>
    )
}

export default NoteState;


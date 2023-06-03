
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
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
            "_id": "647790f5f97bd330e450081c",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title",
            "description": "hello everyone",
            "tag": "personal",
            "date": "2023-05-31T18:24:53.756Z",
            "__v": 0
        },
        {
            "_id": "647790fef97bd330e450081e",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title",
            "description": "hello everyone",
            "tag": "personal",
            "date": "2023-05-31T18:25:02.698Z",
            "__v": 0
        },
        {
            "_id": "64779b59870de05cf3bbe111",
            "user": "6472e943a55c7854762b3ecb",
            "title": "my title is updated2",
            "description": "hello everyone rrr",
            "tag": "personal",
            "date": "2023-05-31T19:09:13.005Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


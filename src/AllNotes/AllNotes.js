import React from "react";
import { Link } from "react-router-dom";
import folders from "../STORE";

function AllNotes() {
  return (
    <div className="allNotesDiv">
      <ul>
        {folders.notes.map((note) => (
          <li key={`${note.id}`}>
            <Link to={`/note/${note.id}`}>
              {" "}
              <h3>{note.name}</h3>
            </Link>
            <p>Modified: {note.modified}</p>
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <button>Add Note</button>
    </div>
  );
}

export default AllNotes;

import React from "react";
import { Link } from "react-router-dom";
import folders from "../STORE";

function FilteredNotes(props) {
  const note = folders.notes.filter(
    (note) => note.folderId === props.match.params.folderid
  );

  return (
    <div>
      <ul>
        {note.map((item) => (
          <li key={item.id}>
            <Link to={`/note/${item.id}`}>
              {" "}
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <button>Add Note</button>
    </div>
  );
}

export default FilteredNotes;

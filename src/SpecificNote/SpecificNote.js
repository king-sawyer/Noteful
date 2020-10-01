import React from "react";
import folders from "../STORE";

function SpecificNote(props) {
  let note = folders.notes.find(
    (snote) => snote.id === props.match.params.noteid
  );

  return (
    <div>
      <h2>{note.name}</h2>
      <p>Modified: {note.modified}</p>
      <button>Remove</button>
      <p>{note.content}</p>
    </div>
  );
}

export default SpecificNote;

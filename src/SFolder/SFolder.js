import React from "react";
import folders from "../STORE";

function SFolder(props) {
  let note = folders.notes.find(
    (snote) => snote.id === props.match.params.noteid
  );

  let folder = folders.folders.find((sfolder) => sfolder.id === note.folderId);

  return (
    <div>
      {folder.name} <button>Back</button>
    </div>
  );
}

export default SFolder;

import React from "react";
// import folders from "../STORE";
import Context from "../Context";

class SFolder extends React.Component {
  static contextType = Context;
  render() {
    let note =
      this.context.notes.find(
        (snote) => snote.id === this.props.match.params.noteid
      ) || null;

    let folder = note
      ? this.context.folders.find((sfolder) => sfolder.id === note.folderId)
      : {};

    return (
      <div>
        {folder.name} <button>Back</button>
      </div>
    );
  }
}

export default SFolder;

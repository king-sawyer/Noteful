import React from "react";
import Context from "../Context";
import { Redirect } from "react-router-dom";

class SpecificNote extends React.Component {
  static contextType = Context;
  render() {
    const note =
      this.context.notes.find(
        (snote) => snote.id === this.props.match.params.noteid
      ) || null;

    return note ? (
      <div>
        <h2>{note.name}</h2>
        <p>Modified: {note.modified}</p>
        <button
          onClick={() =>
            this.context.handleDeleteNote(note.id, this.props.history)
          }
        >
          Remove
        </button>
        <p>{note.content}</p>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}
export default SpecificNote;

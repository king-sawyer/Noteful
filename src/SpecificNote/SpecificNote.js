import React from "react";
import Context from "../Context";

class SpecificNote extends React.Component {
  static contextType = Context;
  render() {
    const note = this.context.notes.find(
      (snote) => snote.id === this.props.match.params.noteid
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
}
export default SpecificNote;

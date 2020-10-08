import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class AllNotes extends React.Component {
  static contextType = Context;

  render() {
    var ran = Math.floor(Math.random() * 100000);

    return (
      <div className="allNotesDiv">
        <ul>
          {this.context.notes.map((note) => (
            <li key={`${note.id}`}>
              <Link to={`/note/${note.id}`}>
                {" "}
                <h3>{note.name}</h3>
              </Link>
              <p>Modified: {note.modified}</p>
              <button
                onClick={() =>
                  this.context.handleDeleteNote(note.id, this.props.history)
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <Link to={"/addNote"}>
          <button onClick={() => this.context.handleNoteChange.changeID(ran)}>
            Add Note
          </button>
        </Link>
      </div>
    );
  }
}

export default AllNotes;

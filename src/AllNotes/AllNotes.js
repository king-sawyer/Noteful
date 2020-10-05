import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class AllNotes extends React.Component {
  static contextType = Context;
  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`https://localhost:9090/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
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
              <button onClick={this.handleClickDelete}>Remove</button>
            </li>
          ))}
        </ul>
        <button>Add Note</button>
      </div>
    );
  }
}

export default AllNotes;

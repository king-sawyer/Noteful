import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class FilteredNotes extends React.Component {
  static contextType = Context;
  render() {
    const note = this.context.notes.filter(
      (note) => note.folderId === this.props.match.params.folderid
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
              <p>Modified: {note.modified}</p>
              <button
                onClick={() =>
                  this.context.handleDeleteNote(item.id, this.props.history)
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button>Add Note</button>
      </div>
    );
  }
}

export default FilteredNotes;

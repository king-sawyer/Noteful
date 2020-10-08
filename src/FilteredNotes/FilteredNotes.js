import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import PropTypes from "prop-types";

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
              <p>Modified: {item.modified}</p>
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
        <Link to="/addNote">
          <button>Add Note</button>
        </Link>
      </div>
    );
  }
}

export default FilteredNotes;

FilteredNotes.propTypes = {
  context: PropTypes.shape({
    handleDeleteNote: PropTypes.func,
    notes: PropTypes.object,
  }),
};

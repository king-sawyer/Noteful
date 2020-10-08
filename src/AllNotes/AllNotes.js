import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import moment from "moment";
import PropTypes from "prop-types";

class AllNotes extends React.Component {
  static contextType = Context;

  render() {
    var ran = Math.floor(Math.random() * 100000000).toString();
    let rando = "e" + ran;
    return (
      <div className="allNotesDiv">
        <ul>
          {this.context.notes.map((note) => (
            <li key={`${note.id}`}>
              <Link to={`/note/${note.id}`}>
                {" "}
                <h3>{note.name}</h3>
              </Link>
              <p>Modified: {moment(note.modified).format("YYYY Do MMM")}</p>
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
          <button onClick={() => this.context.handleNoteChange.changeID(rando)}>
            Add Note
          </button>
        </Link>
      </div>
    );
  }
}

export default AllNotes;

AllNotes.propTypes = {
  context: PropTypes.shape({
    handleNoteChange: PropTypes.object,
    handleDeleteNote: PropTypes.func,
    notes: PropTypes.object,
  }),
};

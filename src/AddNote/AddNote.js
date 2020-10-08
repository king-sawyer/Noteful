import React from "react";
import Context from "../Context";
import PropTypes from "prop-types";

class AddNote extends React.Component {
  static contextType = Context;

  componentDidMount() {
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    this.context.handleNoteChange.changeNoteModified(date);
  }

  render(props) {
    let note = {
      id: this.context.noteId,
      name: this.context.noteName,
      modified: this.context.noteModified,
      folderId: this.context.noteFolderId,
      content: this.context.noteContent,
    };

    return (
      <div className="AddNoteForm">
        <form
          onSubmit={(e) => {
            this.context.addNote(e, note);
            this.props.history.push("/");
            this.context.handleNoteChange.clearNoteNameContent();
          }}
        >
          <label htmlFor="noteFormId">Note: </label>
          <input
            required
            type="text"
            id="noteFormId"
            value={this.context.noteName}
            onChange={(e) =>
              this.context.handleNoteChange.changeName(e.target.value)
            }
          />{" "}
          <br />
          <label htmlFor="noteFormDescriptionId">Note content: </label>
          <input
            type="text"
            id="noteFormDescription"
            value={this.context.noteContent}
            onChange={(e) =>
              this.context.handleNoteChange.changeContent(e.target.value)
            }
          />{" "}
          <br />
          <select
            onChange={(e) =>
              this.context.handleNoteChange.changeFolderId(e.target.value)
            }
          >
            {this.context.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNote;

AddNote.propTypes = {
  context: PropTypes.shape({
    folders: PropTypes.object,
    handleNoteChange: PropTypes.object,
    noteContent: PropTypes.string,
    noteName: PropTypes.string,
    addNote: PropTypes.func,
    noteId: PropTypes.string,
    noteFolderId: PropTypes.string,
    noteModified: PropTypes.string,
  }),
};

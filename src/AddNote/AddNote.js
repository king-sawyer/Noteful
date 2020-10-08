import React from "react";
import Context from "../Context";

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
    console.log(date);

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
        <form>
          <label htmlFor="noteFormId">Note: </label>
          <input
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
          <button onClick={(e) => this.context.addNote(e, note)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNote;

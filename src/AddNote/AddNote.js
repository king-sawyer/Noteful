import React from "react";
import Context from "../Context";

class AddNote extends React.Component {
  static contextType = Context;
  state = {
    note: {
      noteId: "1234",
      folderId: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      Name: "",
    },
  };

  handleChange(e){
      this.setState({note.Name=event.target.value})
  }
  render() {
    return (
      <div className="AddNoteForm">
        <form>
          <label htmlFor="noteFormId">Note: </label>
          <input type="text" id="noteFormId" onChange={(e) => } />{" "}
          <br />
          <label htmlFor="noteFormDescriptionId">Note description: </label>
          <input type="text" id="noteFormDescription" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNote;

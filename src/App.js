import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Notes from "./Notes/Notes";
import Context from "./Context";
import AddNote from "./AddNote/AddNote";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    noteName: "",
    noteFolderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    noteContent: "",
    noteId: "d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",
    noteModified: "",
    handleDeleteNote: (noteId, history) => {
      fetch(`http://localhost:9090/notes/${noteId}`, {
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
          this.setState(
            {
              notes: this.state.notes.filter((note) => note.id !== noteId),
            },
            () => history.push("/")
          );
        })
        .catch((error) => {
          console.error({ error });
        });
    },

    handleNoteChange: {
      changeName: (name) => {
        this.setState({
          noteName: name,
        });
      },
      changeContent: (content) => {
        this.setState({
          noteContent: content,
        });
      },
      changeID: (val) => {
        this.setState({
          noteId: val,
        });
      },
      changeFolderId: (val) => {
        this.setState({
          noteFolderId: val,
        });
      },
      changeNoteModified: (val) => {
        this.setState({
          noteModified: val,
        });
      },
    },

    addNote: (e, note) => {
      e.preventDefault();
      this.setState({ notes: [...this.state.notes, note] });
      fetch(`http://localhost:9090/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .catch((error) => {
          console.error(error);
        });
      console.log({ note });
    },
  };

  componentDidMount() {
    fetch("http://localhost:9090/notes")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        }
        return response.json();
      })
      .then((notes) => this.setState({ notes }))
      .catch((error) => {
        console.error(error);
      });

    fetch("http://localhost:9090/folders")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((e) => Promise.reject(e));
        }
        return response.json();
      })
      .then((folders) => this.setState({ folders }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={Header} />
          <Route path="/" component={SideBar} />
          <Route path="/" component={Notes} />
          <Route path="/addNote" component={AddNote} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;

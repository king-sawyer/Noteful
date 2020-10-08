import React from "react";

export default React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  addNote: () => {},
  handleNoteChange: {},
  handleNoteModified: {},
  noteName: "",
  noteFolderId: "",
  noteContent: "",
  noteId: "",
  noteModified: "",
});

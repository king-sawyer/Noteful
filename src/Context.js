import React from "react";

export default React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  addNote: () => {},
  addFolder: () => {},
  handleNoteChange: {},
  handleNoteModified: {},
  noteName: "",
  noteFolderId: "",
  noteContent: "",
  noteId: "",
  noteModified: "",
  newFoldName: "",
  newFoldId: "",
});

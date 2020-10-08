import React from "react";
import { Route } from "react-router-dom";
import AllNotes from "../AllNotes/AllNotes";
import FilteredNotes from "../FilteredNotes/FilteredNotes";
import SpecificNote from "../SpecificNote/SpecificNote";

function Notes() {
  return (
    <div>
      <Route exact path="/" component={AllNotes} />
      <Route
        path="/folders/:folderid"
        render={(rprops) => <FilteredNotes {...rprops} />}
      />
      <Route
        path="/note/:noteid"
        render={(rprops) => <SpecificNote {...rprops} />}
      />
    </div>
  );
}

export default Notes;

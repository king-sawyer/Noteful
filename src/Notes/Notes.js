import React from "react";
import { Switch, Route } from "react-router-dom";
import AllNotes from "../AllNotes/AllNotes";
import FilteredNotes from "../FilteredNotes/FilteredNotes";
import SpecificNote from "../SpecificNote/SpecificNote";

function Notes() {
  return (
    <div>
      <Switch>
        <Route
          path="/folders/:folderid"
          render={(rprops) => <FilteredNotes {...rprops} />}
        />
        <Route
          path="/note/:noteid"
          render={(rprops) => <SpecificNote {...rprops} />}
        />
        <Route path="/" component={AllNotes} />
      </Switch>
    </div>
  );
}

export default Notes;

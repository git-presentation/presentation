import React from "react";
import { render } from "react-dom";
import { Spectacle, Deck } from "./src";

require("normalize.css");
require("./src/themes/default/index.css");

import * as Introduction from "./presentation/introduction";
import * as Basics from "./presentation/basics";
import * as Remote from "./presentation/remote";
import * as Branching from "./presentation/branching";

render(
  <Spectacle>
    <Deck transition={["slide"]} transitionDuration={500} progress={"bar"}>
      {Introduction.Title}
      {Introduction.WhatIsGit}
      {Introduction.TableOfContents}

      {Basics.Init}
      {Basics.StatusDef}
      {Basics.AddReadme}
      {Basics.Status("status_readme", "Git status now shows that we've added a new file")}
      {Basics.Add}
      {Basics.DiffStaged}

      {Basics.Commit}
      {Basics.Status("status_commit", "Since we have saved all changes, git status will show us that nothing has changed")}
      {Basics.Log}
      {Basics.Representations}
      {Basics.Show}
      {Basics.Summary}
      {Basics.Assignment}
      {Remote.Clone}
      {Remote.CloneExample}
      {Remote.ChangeReadme}
      {Remote.Push}
      {Remote.PushAssignment}
      {Remote.PullAssignment}

      {Branching.Branches}
      {Branching.Branch}
      {Branching.Checkout}
      {Branching.Merge}
      {Branching.MergeNoFF}
      {Branching.Assignment}

      {Remote.Fetch}
      {Branching.Rebase}
      {Branching.RebaseAssignment}
      {Branching.MergeConflicts}
      {Branching.MergeConflicts2}
      {Branching.MergeConflicts3}
      {Branching.MergeConflictAssignment}


    </Deck>
  </Spectacle>
, document.getElementById("root"));

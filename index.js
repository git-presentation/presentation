import React from "react";
import { render } from "react-dom";
import { Spectacle, Deck } from "./src";

require("normalize.css");
require("./themes/default/index.css");
require("highlight.js/styles/monokai_sublime.css");

import * as Introduction from "./presentation/introduction";
import * as Basics from "./presentation/basics";

render(
  <Spectacle
    theme={require("./themes/default/index")}
    print={require("./themes/default/print")}
  >
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
      {Basics.Show}
      {Basics.Summary}
      {Basics.Assignment}

    </Deck>
  </Spectacle>
, document.getElementById("root"));

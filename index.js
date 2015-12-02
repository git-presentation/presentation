
import React, { Component } from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

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

      {Basics.Clone}
      {Basics.CloneExample}

    </Deck>
  </Spectacle>
, document.getElementById("root"));

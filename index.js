
import React, { Component } from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

import preloader from "./src/utils/preloader";
import * as Introduction from "./presentation/introduction";

require("normalize.css");
require("./themes/default/index.css");
require("highlight.js/styles/monokai_sublime.css");

const images = {
  gitLogo: require("./assets/Git-Logo-Black.png"),
  gitIcon: require("./assets/Git-Icon-Black.png")
};

preloader([images.gitLogo]);

render(
  <Spectacle
    theme={require("./themes/default/index")}
    print={require("./themes/default/print")}
  >
    <Deck transition={["slide"]} transitionDuration={500} progress={"bar"}>

      {Introduction.Title}
      {Introduction.WhatIsGit}
      {Introduction.TableOfContents}

      <Slide id="git-clone">
        <Heading size={2}>git clone</Heading>
        <Text>
          Clone a remote git repository to the current directory
        </Text>
        <CodePane lang="bash" margin="50px 0 25px">
          git clone git@github.com:git-presentation/example.git git-presentation
        </CodePane>
      </Slide>


    </Deck>
  </Spectacle>
, document.getElementById("root"));

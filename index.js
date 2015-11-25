import React, { Component } from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "./src";

import preloader from "./src/utils/preloader";

import Interactive from "./assets/interactive";

require("normalize.css");
require("./themes/default/index.css");
require("highlight.js/styles/monokai_sublime.css");

const images = {
  city: require("./assets/city.jpg"),
  kat: require("./assets/kat.png"),
  logo: require("./assets/formidable-logo.svg"),
  markdown: require("./assets/markdown.png")
};

preloader([images.city, images.kat, images.markdown]);

render(
  <Spectacle
    theme={require("./themes/default/index")}
    print={require("./themes/default/print")}
  >
    <Deck transition={["zoom", "slide"]} transitionDuration={500}>

      <Slide bgColor="primary">
        <Heading fit textColor="secondary">Introduction to GIT</Heading>
        <Heading fit textColor="secondary">Sven Baars &amp; Mark Redeman</Heading>

        <CodePane lang="bash" margin="50px 0">
          sudo apt-get install git
        </CodePane>
      </Slide>

      <Slide transition={["spin", "zoom"]} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
          `}
        </Markdown>
      </Slide>
    </Deck>
  </Spectacle>
, document.getElementById("root"));

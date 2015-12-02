import React from "react";

import {
  CodePane, Fill, Heading, Image, Layout, Link, ListItem, List, Slide, Text
} from "./../src";

export const Clone = (
  <Slide id="git-clone">
    <Heading size={2}>git clone</Heading>
    <Text>
      Clone (download) a remote git repository to the current directory
    </Text>
    <CodePane lang="bash" margin="50px 0 25px">
      git clone git@github.com:git-presentation/example.git git-presentation
    </CodePane>
  </Slide>
);

export const CloneExample = (
  <Slide>
    <Heading size={2}>git clone</Heading>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/clone_result.txt")}
      margin="50px 0 25px"
    />
  </Slide>
);


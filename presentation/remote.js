import React from "react";

import {
  CodePane, Heading, Slide, Text, Code
} from "./../src";

export const Clone = (
  <Slide>
    <Heading size={2}>git clone</Heading>
    <Text margin="20px 0">
      Clone (download) a remote git repository to the current directory
    </Text>
    <CodePane lang="bash" margin="25 0 25px">
      git clone https://github.com/git-presentation/presentation.git git-workshop
    </CodePane>
  </Slide>
);

export const CloneExample = (
  <Slide>
    <Heading size={2}>Example scripts</Heading>
    <Text margin="20px 0">
      In the <Code>git-workshop</Code> folder you can find example scripts. We will now run <Code>scripts/push-example.sh</Code> and continue from there
    </Text>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/tree_git_workshop.txt")}
      margin="25 0 25px"
    />
  </Slide>
);


export const PushExampleScript = (
  <Slide>
    <Heading size={2}>Run push example</Heading>
    <Text margin="20px 0">
      In the <Code>git-workshop</Code> folder you can find example scripts
    </Text>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/push_example_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const ChangeReadme = (
  <Slide>
    <Heading fit size={2}>Making changes to the local repository</Heading>
    <Text margin="20px 0">
      The current readme is empty, add some info, <Code>git add</Code> it and <Code>git commit</Code>.
    </Text>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/push_example_change_readme.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const Push = (
  <Slide>
    <Heading size={2}>git push</Heading>
    <Text margin="20px 0">
      Use <Code>git push</Code> to send your changes to the remote repository.
    </Text>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/push_pre_result.txt")}
      margin="25 0 25px"
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/push_result.txt")}
      margin="25 0 25px"
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/push_post_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const PushAssignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight={1.5}>
      Run <Code>sh scripts/push-example.sh</Code> make changes to the local repository and use <Code>git push</Code> to synchronize with the remote repository.
    </Text>
  </Slide>
);

export const Pull = (
  <Slide>
    <Heading size={2}>git pull</Heading>
    <Text margin="20px 0">
      Use <Code>git pull</Code> to get recent changes from a remote repository.
    </Text>
    <CodePane
      lang="bash"
      source={require("raw!./../examples/pull_pre_result.txt")}
      margin="25 0 25px"
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/pull_result.txt")}
      margin="25 0 25px"
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/pull_post_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const PullAssignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Heading margin="30px 0 5px" textAlign="left" size={5}>1. Pull changes</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight={1.5}>
      Run <Code>sh scripts/pull-example.sh</Code> and use <Code>git pull</Code> to synchronize with the remote repository.
    </Text>
  </Slide>
);

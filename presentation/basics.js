import React from "react";
// import * from "gitgraph.js";

import {
  CodePane, Heading, Slide, Text, GitGraph, List, ListItem, Code
} from "./../src";

export const Init = (
  <Slide id="git-init">
    <Heading size={2}>git init</Heading>
    <Text margin="20px 0">
      Create an empty Git repository
    </Text>
    <CodePane lang="bash" margin="25 0 25px" source={`
$> git init my-repository

Initialized empty Git repository in /home/mark/Projects/Talks/git-workshop/my-repository/.git/
      `}
    />
  </Slide>
);

export const AddReadme = (
  <Slide>
    <Heading size={2}>Add a readme</Heading>
    <Text margin="20px 0">
      Let's add a file to the repository
    </Text>
    <CodePane
      lang="bash"
      margin="25 0 25px"
      source={`
cd my-repository

echo "I'm learning to use Git." >> README
        `}
    />
  </Slide>
);

export const StatusDef = (
  <Slide id="git-status">
    <Heading size={2}>git status</Heading>
    <Text margin="20px 0">
      Shows paths of files that have been changed
    </Text>
    <CodePane
      lang="bash"
      margin="25px 0 25px"
      source={require(`raw!./../examples/status_init.txt`)}
    />
  </Slide>
);

export const Status = (exampleFilename, description) => {
  return (
    <Slide>
      <Heading size={2}>git status</Heading>
      {description ? <Text margin="20px 0">{description}</Text> : undefined}
      <CodePane
        lang="bash"
        margin="25px 0 25px"
        source={require(`raw!./../examples/${exampleFilename}.txt`)}
      />
    </Slide>
  );
};

export const Add = (
  <Slide id="git-add">
    <Heading size={2}>git add</Heading>
    <Text margin="20px 0">
      Start tracking changes to the readme file
    </Text>
    <CodePane
      lang="bash"
      margin="25px 0 25px"
      source={`
$> git add README
$> git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   README
      `}
    />
  </Slide>
);

export const DiffStaged = (
  <Slide id="git-diff-staged">
    <Heading size={2}>git diff --staged</Heading>
    <Text margin="20px 0">
      Shows differences between staged and commited files
    </Text>
    <CodePane
      lang="diff"
      margin="25px 0 25px"
      source={`
$> git diff --staged

diff --git a/README b/README
new file mode 100644
index 0000000..a2390a0
--- /dev/null
+++ b/README
@@ -0,0 +1 @@
+I'm learning to use Git
      `}
    />
  </Slide>
);

export const Commit = (
  <Slide id="git-commit">
    <Heading size={2}>git commit</Heading>
    <Text margin="20px 0">Commit (save) the current changes</Text>
    <CodePane
      lang="diff"
      margin="25px 0 25px"
      source={`
$> git commit -m "Initial Commit"

[master (root-commit) d6d0cf9] Initial Commit
 1 file changed, 1 insertion(+)
 create mode 100644 README
      `}
    />
  </Slide>
);

export const Log = (
  <Slide id="git-log">
    <Heading size={2}>git log</Heading>
    <Text margin="20px 0">
      Show commit logs
    </Text>
    <CodePane
      lang="diff"
      margin="25px 0 25px"
      source={`
$> git log

commit d6d0cf9ec7f28907ab2ceea7e9bae84f9702f75e
Author: Mark Redeman <markredeman@gmail.com>
Date:   Wed Dec 2 21:11:57 2015 +0100

    Initial Commit
      `}
    />
  </Slide>
);

export const Show = (
  <Slide id="git-show">
    <Heading size={2}>git show</Heading>
    <Text margin="20px 0">
      Show commit logs
    </Text>
    <CodePane
      lang="diff"
      margin="25px 0 25px"
      source={`
$>  git show HEAD
commit d6d0cf9ec7f28907ab2ceea7e9bae84f9702f75e
Author: Mark Redeman <markredeman@gmail.com>
Date:   Wed Dec 2 21:11:57 2015 +0100

    Initial Commit

diff --git a/readme.txt b/readme.txt
new file mode 100644
index 0000000..a2390a0
--- /dev/null
+++ b/readme.txt
@@ -0,0 +1 @@
+I'm learning to use Git
      `}
    />
  </Slide>
);

export const Summary = (
  <Slide>
    <Heading size={2}>Summary</Heading>
    <List>
      <ListItem><Code>git init</Code> initialize a new git repository</ListItem>
      <ListItem><Code>git status</Code> show current changes</ListItem>
      <ListItem><Code>git add</Code> add one or more files to the staging area</ListItem>
      <ListItem><Code>git diff</Code> show differences between changes</ListItem>
      <ListItem><Code>git commit</Code> save the current stages</ListItem>
      <ListItem><Code>git log</Code> show a list of all commits</ListItem>
      <ListItem><Code>git show</Code> show the changes of a commit</ListItem>
    </List>
  </Slide>
);

export const Assignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight="1.5em">
      Change the <Code>README</Code> file and add a new file. Add both files to the staging area and save (commit) them.
      Use <Code>git status</Code>, <Code>git diff</Code> and <Code>git log</Code> to verify that everything is working correctly.
    </Text>
  </Slide>
);

export const CommitAfter = (
  <Slide>
    <GitGraph history={(gitgraph) => {
      const master = gitgraph.branch("master");
      master.commit({
        author: "Mark Redeman",
        message: "[Initial Commit]"
      }).commit({
        author: "Mark Redeman",
        message: "Add readme file"
      }).commit({
        author: "Mark Redeman",
        message: "Fix typo in readme file"
      });
    }}
    />
    <Heading size={2}>git commit</Heading>
  </Slide>
);

import React from "react";

import {
  CodePane, Fill, Heading, Code, ListItem, List, Slide, Text, GitGraph
} from "./../src";

export const Branches = (
  <Slide>
    <Heading size={2}>
        Branches
    </Heading>
    <Text margin="20px 0">
      Branches represent an independent line of development. They can be used so that you can work on a <strong>feature</strong> while also working on a <strong>fix</strong> for your program, not including said feature.
    </Text>

    <GitGraph
      history={(gitgraph) => {
        const master = gitgraph.branch("master");
        gitgraph.commit({
          author: "Mark Redeman",
          message: "Initial commit"
        }).commit({
          author: "Mark Redeman",
          message: "Fix typo in readme"
        }).commit({
          author: "Mark Redeman",
          message: "Add additional information in readme"
        });

        const develop = gitgraph.branch("develop");
        develop.commit({
          message: "Add documentation file"
        }).commit({
          message: "Change documentation file"
        });

        master.checkout();
        const fix = gitgraph.branch("fix").commit({
          message: "Fix the readme"
        }).commit({
          message: "Fix a typo in the previous commit"
        });

        master.commit({
          message: "Add a new file"
        });
        develop.commit({
          message: "Add new documentation file"
        });
        master.checkout();
      }}
    />
     <Text margin="20px 0">
      The example above contians three branches, a <strong>master</strong>, <strong>documentation-feature</strong> and a <strong>fix-typos</strong> branch.
    </Text>

  </Slide>
);


export const Branch = (
  <Slide>
    <Heading size={2}>
        git branch
    </Heading>
    <List>
      <ListItem>Use <Code>git branch</Code> to show the names of all branches.</ListItem>
      <ListItem>Use <Code>git branch fix-typos</Code> to create a new <strong>fix-typos</strong> branch.</ListItem>
    </List>

    <GitGraph
      history={(gitgraph) => {
        const master = gitgraph.branch("master");
        gitgraph.commit({
          author: "Mark Redeman",
          message: "Initial commit"
        }).commit({
          author: "Mark Redeman",
          message: "Fix typo in readme"
        }).commit({
          author: "Mark Redeman",
          message: "Add additional information in readme"
        });
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/branch_result.txt")}
      margin="25 0 25px"
    />

    <Text>
      Notice that the <Code>*</Code> tells us that we are still working on the <strong>master</strong> branch.
    </Text>
  </Slide>
);

export const Checkout = (
  <Slide>
    <Heading size={2}>
        git checkout
    </Heading>
    <List>
      <ListItem>Use <Code>git checkout fix-typos</Code> to switch to the <strong>fix-typos</strong> branch.</ListItem>
    </List>

    <GitGraph
      history={(gitgraph) => {
        const master = gitgraph.branch("master");
        gitgraph.commit({
          author: "Mark Redeman",
          message: "Initial commit"
        }).commit({
          author: "Mark Redeman",
          message: "Fix typo in readme"
        }).commit({
          author: "Mark Redeman",
          message: "Add additional information in readme"
        });

        const fixTypos = gitgraph.branch("fix-typos").commit({
          message: "Fix typos"
        });
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/checkout_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const Merge = (
  <Slide>
    <Heading size={2}>
        git merge
    </Heading>
    <List>
      <ListItem>Use <Code>git merge fix-typos</Code> to merge the commits of <strong>fix-typos</strong> into the <strong>master</strong> branch.</ListItem>
    </List>

    <GitGraph
      history={(gitgraph) => {
        const master = gitgraph.branch("master");
        gitgraph.commit({
          author: "Mark Redeman",
          message: "Initial commit"
        }).commit({
          author: "Mark Redeman",
          message: "Fix typo in readme"
        }).commit({
          author: "Mark Redeman",
          message: "Add additional information in readme"
        });

        const fixTypos = gitgraph.branch("fix-typos").commit({
          message: "Fix typos"
        });
        master.checkout();
        fixTypos.merge(master);
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/merge_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

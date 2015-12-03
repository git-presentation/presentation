import React from "react";

import {
  CodePane, Fill, Heading, Code, ListItem, List, Slide, Text, GitGraph, Layout, Fit
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
      }}
    />


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

        master.commit({
          message: "Fix typos"
        });
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/merge_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);


export const MergeNoFF = (
  <Slide>
    <Heading size={2}>
        git merge --no-ff
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
      source={require("raw!./../examples/merge_no_ff_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const Assignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight={1.5}>
      Run <Code>sh scripts/branch-example.sh</Code> and use <Code>git branch</Code> to show the branches, and <Code>git merge</Code> to merge <strong>feature2</strong> into master.
      Verify with
    </Text>
    <CodePane>git log --oneline --all --graph --decorate</CodePane>
  </Slide>
);


export const Rebase = (
  <Slide>
    <Heading size={2}>
        git rebase
    </Heading>
    <List>
      <ListItem>Use <Code>git rebase master</Code> to change the original branching point of a branch.</ListItem>
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
        master.commit({ message: "Commit 1" })
              .commit({ message: "Commit 2" });
      }}
    />


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

        master.commit({ message: "Commit 1" })
              .commit({ message: "Commit 2" });

        const fixTypos = gitgraph.branch("fix-typos").commit({
          message: "Fix typos"
        });
        master.checkout();
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/rebase_result.txt")}
      margin="25 0 25px"
    />
  </Slide>
);

export const RebaseAssignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight={1.5}>
      Run <Code>sh scripts/pull-example2.sh</Code> change the README file, try to push the changes.
    </Text>
    <List>
    <ListItem>
      Solve problems with <Code>git fetch</Code>, <Code>git rebase</Code>
    </ListItem>

    <ListItem>
      Solve problems with <Code>git pull</Code>
    </ListItem>
    </List>
  </Slide>
);


export const MergeConflicts = (
  <Slide>
    <Heading margin="20px 0" size={2}>
        Merge conflicts
    </Heading>

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
        master.commit({
          message: "Some commit"
        });
        fixTypos.merge(master);
      }}
    />

    <CodePane
      lang="bash"
      source={require("raw!./../examples/merge_conflict_result_1.txt")}
      margin="25 0 25px"
    />
  </Slide>
);


export const MergeConflicts2 = (
  <Slide>
    <Heading margin="20px 0" size={2}>
        Merge conflicts
    </Heading>

      <CodePane
        lang="bash"
        source={require("raw!./../examples/merge_conflict_result_2.txt")}
        margin="25 0 25px"
      />
  </Slide>
);


export const MergeConflicts3 = (
  <Slide>
    <Heading margin="20px 0" size={2}>
        Merge conflicts
    </Heading>

      <CodePane
        lang="bash"
        source={require("raw!./../examples/merge_conflict_result_3.txt")}
        margin="25 0 25px"
      />
  </Slide>
);
export const MergeConflictAssignment = (
  <Slide>
    <Heading size={2}>Assignment</Heading>
    <Text margin="20px 0" textAlign="left" lineHeight={1.5}>
      Run <Code>sh scripts/conflict-example.sh</Code> change the readme file and fix the merge conflict.
    </Text>
  </Slide>
);
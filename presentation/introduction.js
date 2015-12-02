import React from "react";

import {
  CodePane, Fill, Heading, Image, Layout, Link, ListItem, List, Slide, Text
} from "./../src";

import preloader from "./../src/utils/preloader";

const images = {
  gitLogo: require("./../assets/Git-Logo-Black.png"),
  gitIcon: require("./../assets/Git-Icon-Black.png")
};

preloader([images.gitLogo]);

export const Title = (
  <Slide>
    <Heading fit textColor="secondary">
    Introduction to Git
    </Heading>
    <Heading fit textColor="secondary">Sven Baars &amp; Mark Redeman</Heading>

    <CodePane lang="bash" margin="50px 0 25px">
      sudo apt-get install git
    </CodePane>
    <Text>
      * Or use your own prefered packaga manager
    </Text>
  </Slide>
);

export const WhatIsGit = (
  <Slide notes="
    <ul>
       <li>Every commit is a backup of your project</li>
       <li>You can always reproduce results that were produced at a certain date</li>
       <li>It is easy to work together on a project while editing the same files (as long as you don't edit the same lines)</li>
       <li>Use it even when on your own</li>
       <li>Project is documented through commits (update version)</li>
       <li>Every commit that is merged into master should work so it forces you to test! your code</li>
    </ul>"
  >
     <Heading size={2}>
      What is
      <Image src={images.gitLogo.replace("/", "")} margin="-20px 20px" height="100px" />
      ?
    </Heading>
    <List>
      <ListItem>Creates a backup of your project</ListItem>
     <ListItem>Reproducible data</ListItem>
     <ListItem>collaborate with others</ListItem>
     <ListItem>Use it even when on your own</ListItem>
     <ListItem>Document your project with meaningull commit messages</ListItem>
     <ListItem>Forces working (tested) code</ListItem>
    </List>
  </Slide>
);

export const TableOfContents = (
  <Slide>
    <Heading size={2}>Table of Contents</Heading>
    <Layout>
      <Fill>
      {/* Maak dit clickable */}
        <List>
          <ListItem><Link href="/git-clone">git clone</Link></ListItem>
          <ListItem>git add</ListItem>
          <ListItem>git status</ListItem>
          <ListItem>git diff</ListItem>
          <ListItem>git commit</ListItem>
          <ListItem>git log</ListItem>
          <ListItem>git reset</ListItem>
        </List>
      </Fill>
      <Fill>
        <List>
          <ListItem>git branch</ListItem>
          <ListItem>git checkout</ListItem>
          <ListItem>git rebase / merge</ListItem>
          <ListItem>git revert</ListItem>
          <ListItem>git stash</ListItem>
          <ListItem>git bisect</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);

# New Pace University Learning Commons Main Feed

### This is a react project that will be used to display the main feed of the Pace University Learning Commons.

## Table of Contents
- [Non-Technical Documentation](#non-technical-documentation)
    - [Where is the app deployed?](#where-is-the-app-deployed)
    - [Features](#features)
    - [Who worked/is working on this project](#who-worked--is-working-on-this-project)
- [Technical Documentation](#technical-documentation)
    - [Getting Started](#getting-started)
    - [Commands - Yarn](#commands---yarn)
    - [Commands - Git](#commands---git)
    - [Tailwinds CSS](#tailwinds-css)
    - [.env file](#env-file)
    - [Global State](#global-state)
    - [ES Lint](#es-lint)


<br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Non-Technical Documentation

### Where is the app deployed?
The app is deployed in the AWS cloud using AWS Amplify. The cost for this Cloud Compute tool is free which is the reason we deployed the app using it.

### Features
[Home Page](https://main.d3j94bg6n7pdek.amplifyapp.com/)
* This page features a welcome title and an image of each Pace University Campus
* A user can click an image to be taken to that respective main feed

[PLV LC Home](https://main.d3j94bg6n7pdek.amplifyapp.com/plv)
* Welcome title
* Weather banner with current and weekly forecast PLV weather
* Time and Date
* Live stream video
* Stock ticker

[NYC LC Home](https://main.d3j94bg6n7pdek.amplifyapp.com/nyc)
* For now, the two pages are identical besides the naming and weather coordinates. 
* Both pages are technically different and can be updated separately to meet the needs of each LC.

### Who worked/is working on this project
Currently, the project is being worked on by PLV CS tutors. If anyone is interested in adding to the site please contact any of the PLV CS tutors or the PLV tutoring center

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Technical Documentation

### Getting Started
1. Install Visual Studios Code or any other IDE
2. Install git and create a GitHub profile
3. Install node.js
4. Install Yarn using npm
5. Install ES Lint extension in VS Code
6. Clone the repo from this [link](https://github.com/Tibesnoff/New_LC_Feed_Pace_University.git)
7. Navigate to the WebApp folder for the application files
   <br/>(All other folders are not useful to the current WebApp and are only left in if need be)
8. Run [yarn setup](#commands---yarn)
9. To add to the project make sure you have created a new branch by running git checkout -b <"branch_name">
10. When you are done adding to the project make sure you commit all git changes then create a pull request into main on GitHub
11. Contact another developer to review changes and merge them into main
12. AWS Amplify will automatically deploy a new version when a PR is merged into main


### Commands - Yarn

| Command | Description |
| -------- | ------- |
| yarn Start | Starts the project |
| yarn Install | Installs node dependencies |

### Commands - Git
| Command | Description |
| -------- | ------- |
| git branch | See all branches |
| git checkout <branch_name> | Switches branch to <branch_name> |
| git pull | Pulls data from remote branch |
| git push | Pushes data to remote branch |
| git checkout -b <branch_name> | Creates a new branch called <branch_name> |
| git branch -D <branch_name> | Deletes <branch_name> locally |


### Tailwinds CSS

* Tailwinds is a component and CSS library used with React. We are using this library as it removes the need to create CSS style sheets
* How to use Tailwinds
  * Find an existing component (lazy way)
  * Create your component (fun way)
    * Add a className prop to any existing HTML component using the [tailwinds CSS docs](https://tailwindcss.com/docs/installation)
    * Create a component in the stylized components folder

### .env file

.end file needs to be created locally. It should have the following variables:

REACT_APP_YOUTUBE_LINK={YouTube unique video id}

In AWS amplify, this is set as an environment variable that can be changed to change the live version YouTube video

### Global State
Global state is tricky to use on this web app because the current ticker keeps refreshing the components on the page and is causing bugs in global state which I cannot figure out

### ES Lint
ES Lint is set up in this project to keep the code clean and organized. ES Lint has a dedicated [yarn script](#commands---yarn) to lint the file. This command is also added to the [yarn startup](#commands---yarn) command 

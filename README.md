# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




Roles:
Emma - Pseudocode, Backend, queries, mutations, models, schemas, authentication, polishing, test data (seeds)
Emerald - UI/UX, Design, Backend, CSS, React
David - Front end, React, "Toggle Elements" (ifLoggedIn) w/ Emma, Presentation
Dylan - React, Zip code radius w/ latitude longitude or map API (geolocation), expanding cards for tasks, Presentation, Stretch Goal: Zapier


// Roadmap

BY NEXT CLASS (6/4)
Emma - Mongodb, graphql, authentication, more research
Emerald - Completed figma design
David - Figma, After we decide on Figma -> Main Container, Strecth: Nav & Footer
Dylan - Geolocation


// MVP:
-- Contactless - we set the safety parameters - we're in control of deadlines/notifications/etc.
-- Mailjs
-- Mobile friendly

PAGES:

1. Main -
-- nav bar with: login, register
-- search jumbotron by location (either zip or city/state) -> register/login -> zip code gets assigned to user upon registerring or logging in 


2. Register - 


3. Login -


4. Homepage - (Once logged in) 
-- navbar with: profile, logout, tasks
-- sidebar with categories or task dashboard ** need to keep thinking on this
        // Categories of Tasks TODO: Find logos for these
        -- Food
        -- Landscaping
        -- Home Improvement
        -- Cleaning
        -- Furniture Assembly
        -- Errands
        -- Moving
-- (findAll) body with all open tasks in your location mapped


5. (FindOne) Task Page - ** If you click on a task in your area ** 
All single task information 
TODO (Emma): Add missing items to schemas/typedefs
        -- name
        -- category*
        -- description*
        -- instructions* 
        -- full address (will be shown to the user who claims the task on their profile)
        -- contactlessInstructions* 
        -- created_by: user
        -- claimed_by: user
        -- A button to claim the task

6. Profile page -
Will include:
        -- Open tasks that you've created
        -- Claimed tasks that you've completed
        -- Claimed tasks 
        -- Tasks are links to render back to the findone task page
        -- Edit zip code TODO: (Emma) add in to typedefs/resolvers

7. CreateTask page
        -- name
        -- category
        -- taskDescription
        -- instructions*
        -- full address
        -- contactlessDirections*
        -- created_by: user
        -- claimed_by: user

8. Stretch Goals:
-- Flagging/reporting tasks
-- Allowing users to enter hyperlinks
-- Modals or Bootstrap Alerts
-- More user input on deadlines, contactless boolean and what that does
-- Zapier
-- Add more to task page
-- Share function
-- Save function
-- Calendar of when tasks need to be completed
-- Calendar view


// Color scheme: crisp, modern, friendly - blue, green, white, black???

# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
The Team Profile Generator can be used to create an HTML page that displays credentials of a work team.
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#testing)
- [Questions](#questions)
- [Sources](#sources)

## Installation
1. Clone git hub repo. 
2. Install Nodejs. 
3. Install inquirer in to the file using the integrated terminal.
4. Make sure style.css file is linked in the parse.js file for the rendered HTML
  
## Usage
Using the terminal command `node index.js`, users will be able to create an html file for a team profile using nodejs. The user will be prompted to add their employee information and then after each employee is added will be asked if they'd like to 1. add an engineer, 2. add an intern, or 3. finish building their team. When they are finished building their team, the HTML file will be rendered. 

The team profile HTML file will include a card div for each employee. The cards will be color coded based on the employees role - manager, engineer, or intern. It will include the employee role, name, ID, and email, and other specifics based on their roles - such as github username for engineers, and school for interns. The emails will link to open an outgoing email in the user's email program. The github username will link to the github profile. 

The team profile will be created in a log.html file and each time the user uses the node command, the new informatinon will be appended to the end of that file. I decided to append the file just in case the user did not want to override with each new command and lose the previous data.

The following video shows the functionality of the program:
[Link to Video](https://drive.google.com/file/d/1Wy7XX14HI2lX6d3npa4uCyKtobvw1BIM/view)

## Testing
There are 4 tests included in the repo that test the 4 classes as well as their related functions - Employee, Engineer, Intern, and Manager. To run the tests, make sure inquirer has been downloaded and run `npm run test` in the integrated terminal.

## License
The MIT License

## Questions?

Collaborators:
[Emma Reimer]()
[developwithemma@gmail.com](mailto:developwithemma@gmail.com)

[David Warner]()
[david.hans.warner@gmail.com](mailto:david.hans.warner@gmail.com)

[Emerald Green]()

[Dylan Marcy](https://github.com/djmarcy)
[dylan@djmarcy.com](mailto:dylan@djmarcy.com)

## Built Using
React, GraphQL, MongoDB, Mongoose, Nodejs, Express, Dotenv, 
  
    
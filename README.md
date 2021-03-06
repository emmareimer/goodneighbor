# goodneighbor [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
"Asking for help is hard. That's where we come in."
  
## Description
goodneighbor is the concierge to help connect you to your community by doing small favors for the sake of helping others.
  
## Table of Contents
- [Installation](#installation) 
- [Usage](#usage)
- [Tests](#testing)
- [Questions](#questions)
- [Build](#sources)

## Installation
1. Clone git hub repo. 
2. Run command npm i in all of the package.json (client, server, top-level)
3. Create your .env file using the example env file
        - If you don't want to send notifications, you can delete the courier.js file and remove everything from the env file but the JWT_TOKEN.
3. Run npm run build
4. Run npm run develop
  
## Usage
goodneighbor can be used to find help with small favors in your community. By registering for an account, you'll be able to create tasks that others can claim. Once a task is claimed users will have a certain amount of time to complete the task then they'll mark the task as completed. You can view tasks in your neighborhood by searching on the homepage by zipcode. When you're logged in, you can go to your profile to view your open/posted tasks, your claimed tasks, and your completed tasks.

Some additional features we'd like to add in the future are:
-- Flagging/reporting tasks<br>
-- Modals or Bootstrap Alerts<br>
-- More user input and interaction<br>
-- Zapier<br>
-- Add more functionality to the single task page<br>
-- Share function<br>
-- Save function<br>
-- Calendar of when tasks need to be completed<br>
-- Calendar view

The deployed application can be found at the following link:
[Link to Deployed App](https://be-a-good-neighbor.herokuapp.com/)

## Testing
Tests on the server can be done using Apollo by GraphQL. 
1. Run npm start to start the server.
2. Select cmnd + the graphql link that shows in the terminal.
3. Use the sandbox to test queries and mutations by passing in data as a JSON.

## License
The MIT License

## Questions?

Collaborators:<br>
[Emma Reimer](https://github.com/emmareimer)<br>
[developwithemma@gmail.com](mailto:developwithemma@gmail.com)<br>
--Built the database and server using Mongodb, Mongoose, GraphQL, Apollo, Nodejs, Express, and Javascript<br>
--Assisted in frontend and styling using React, GraphQL, Javascript, JSX, and CSS<br>

[David Warner](http://github.com/1dhwarner)<br>
[david.hans.warner@gmail.com](mailto:david.hans.warner@gmail.com)<br>
--Built the frontend using React, GraphQL, Javascript, JSX, Bootstrap, HTML, and CSS<br>

[Emerald Green](https://github.com/EmeraldAGreen)<br>
[emeraldthedeveloper@gmail.com](mailto:emeraldthedeveloper@gmail.com)<br>
--Created the overall design<br>
--Built the frontend using React, GraphQL, Javascript, JSX, Bootstrap, HTML, and CSS<br>

[Dylan Marcy](https://github.com/djmarcy)<br>
[dylan@djmarcy.com](mailto:dylan@djmarcy.com)<br>
--Built the frontend using React, GraphQL, Javascript, JSX, Bootstrap, HTML, and CSS<br>
--Incorprated Zipcode API in to the search function<br>

## Built Using:
React, GraphQL, MongoDB, Mongoose, Nodejs, Express, Dotenv, Bcrypt, Apollo, JWT Tokens, Designed using [Figma](www.figma.com), Notifications powered by [Courier](www.courier.com), [Zipcode API](www.zipcodeapi.com)
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
        -- category*
        -- description*
        -- directions*
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
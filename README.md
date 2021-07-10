## UM-Project
[![react version](https://img.shields.io/badge/react-17.0.2-blue.svg)](https://www.npmjs.com/package/react/v/17.0.2) 
[![react version](https://img.shields.io/badge/reactrouter-5.2.0-blue.svg)](https://www.npmjs.com/package/react/v/5.2.0) 
[![react version](https://img.shields.io/badge/nodesass-4.14.1-purple.svg)](https://www.npmjs.com/package/react/v/4.14.1) 
[![react version](https://img.shields.io/badge/styledComponents-5.3.0-orange.svg)](https://www.npmjs.com/package/styledComponents/v/5.3.0) 


<p align="center">

<img src="https://media.giphy.com/media/9qRnmAgikuIxMj0N5V/giphy.gif" >

## Introduction

This application was made with React, using the test front-end API https://reqres.in/, to develop user management from register, login, token management and display a paginated list of users where you can add, delete or edit each one of them

## [Deployed Live demo](https://um-project.surge.sh/)

deployed live demo using surge.sh

## Functional Description
Users can:

* Register

* Login

* Have session stored by tab

* Navigate through the paginated (via url also) user list

* Add, edit and delete users from the list


## Aplication Description
The aplication initializes (and is the default page in not declared routes) in the login where you can login if you have an user or go to register if you dont have one avaliable 

## Important 
since this is a test API which is similar to a real use case, there are a few users the test api supports for the register/login step, please test using the following user:

` User: eve.holt@reqres.in ` 

`Password: pistol` (can be any password)

![Login](/doc/images/login.png)

The application comunicates the responses from the server if any error exist

![Feedback](/doc/images/response.png)

after login, the session token is stored an you can navigate in the user list, being able to edit each one of them, or delete

![Userlist](/doc/images/userslist.png)

also you can add more users

![Register](/doc/images/registeruser.png)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

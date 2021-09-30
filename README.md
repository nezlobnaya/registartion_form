![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FVladBurlutsky)![GitHub commit activity](https://img.shields.io/github/commit-activity/m/nezlobnaya/registration_form?style=plastic)![GitHub branch checks state](https://img.shields.io/github/checks-status/nezlobnaya/registration_form/main)[![Build Status](https://app.travis-ci.com/nezlobnaya/registration_form.svg?branch=main)](https://app.travis-ci.com/nezlobnaya/registration_form) <img src="https://badgen.net/badge/LastUpdate/Sept2021/green?icon=github" />

# Registration form & Data Records

MERN app with CRUD functionality, Auth0 single sign-on and authentication deployed to Heroku:

[Demo](https://reggg-form.herokuapp.com/)

## Getting Started

To get the server running locally:

1. `git clone <REPO>`
2. `npm install`
3. `cd client & npm install`
4. Create an account on MongoDB and/or create new Cluster and add connection string to your root .env application file and connect to your server

## Available Scripts

- `npm start` to start the local server
- `npm run test` to run test suite in watch mode
- `npm run server`: to start a local server in development environment with nodemon
- `npm run dev `:to start a local server and a client concurrently

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

1. create a .env file in the root directory that includes the following:

```
CONNECTION_URL=  // Your MongoDB connection URI
PORT=8080  // Port number for express server to run on
SKIP_PREFLIGHT_CHECK=true  // to disable this preflight check
DOMAIN=  // your Auth0 domain
CLIENT_ID=  // your Auth0 client ID
AUDIENCE=  // your Auth0 audience 
AUTH0_CLIENT_SECRET=  // your Auth0 client secret

```

2. create a .env file in the client directory that includes:

```
SKIP_PREFLIGHT_CHECK=true. // to disable this preflight check
REACT_APP_AUTH0_DOMAIN= // your Auth0 domain
REACT_APP_AUTH0_AUDIENCE= // your Auth0 audience 

```

# <b>Built with</b>:
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org)
- [Node.js](https://nodejs.org)


<b>Packages frontend</b>:
- [axios](https://www.npmjs.com/package/axios)
- [moment](https://www.npmjs.com/package/moment)
- [auth0](https://github.com/auth0/auth0-react)
- <b>Styling</b>:
  - [bootstrap](https://www.npmjs.com/package/bootstrap)
  - [react-bootstrap]( https://react-bootstrap.github.io/)
  - [mdb react]( https://mdbootstrap.com/docs/react/)
  
  
 
<b>Packages backend</b>:
- [mongoose](https://www.npmjs.com/package/mongoose)
- [cors](https://www.npmjs.com/package/cors)
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)
- [path](https://www.npmjs.com/package/path)
- [body-parser](https://www.npmjs.com/package/body-parser)
- <b>Authentication</b>:
  - [express-jwt](https://github.com/auth0/express-jwt)
  - [jwks-rsa](https://github.com/auth0/node-jwks-rsa)

<b>Database</b>
- [MongoDB](https://www.mongodb.com/)

<b>Testing</b>
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://cypress.io/)

![Visualization of the codebase](./diagram.svg)

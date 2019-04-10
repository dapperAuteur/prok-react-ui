## ProKickballer.com
This is a passion project. I am the world's first professional kickball player. I managed an adult kickball league for [WAKA](http://bit.ly/2Z3kKuw). I created this application so that players and fans. It's ESPN.com for kickball. Users will be able to see match scores and match status in real-time.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please see the details about starting a Create React App below.

This is the front end of the app and may be used with the [Express](http://bit.ly/2YnxYln) or [Java Spring](http://bit.ly/2Z1VZyT) backend. The Express backend is further along than the Java Spring backend at the moment.

### `Tech Used`
Other than the React, you may find the following tools used in this repo:
- axios: for api calls
- classnames: to show errors to the user
- react-dom-router: to manage routes
- *socket.io-client: to allow users/visitors to see kickball stats real-time (NOT fully implemented yet)

### `Current Status`
- Track match status
  - A user can manage/track the status of a match (ie: score, balls, strikes, fouls, outs, innings)

### `Next Steps`
- Manage/Show/Track kicking order
- Manage/Show/Track player stats

### `To Get Started`
- `git clone` the repo
- `cd prok-react-ui`
  - this will put you into the react portion of the app
- `npm install` to add project dependencies
- `yarn start` will run the project on `port 3000`
- it will communicate with the api on `port 8080`
- current named version of the api is `/api/ver0001/...`

### Create React App ReadMe Boilerplate

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

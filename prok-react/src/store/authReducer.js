import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as authActions from "./authActions";

const API_URL_SIGN_UP = "/auth/sign-up";
const API_URL_SIGN_IN = "/auth/sign-in";
const API_URL_OUT = "/auth/sign-out";
let myCurrentUser;

const authInitialState = {
  cookie: {
    expires: "",
    httpOnly: true,
    originalMaxAge: 0,
    path: "",
    sameSite: true,
    secure: false
  },
  currentUser: {
    _id: "",
    username: "",
    userRole: "",
    profilePicture: "",
    password: "",
    updatedAt: "",
    createdAt: ""
  }
};

const authReducer = (state = authInitialState, action) => {
  let currentUser;
  switch (action.type) {
    // case actionTypes.LOG_IN:
    //   console.log("action", action);
    //   return login(action.payload, state);
    // case actionTypes.SIGN_OUT:
    //   currentUser = action.currentUser;

    //   return signOut(action.payload);
    // case actionTypes.SIGN_UP:
    //   currentUser = action.currentUser;

    //   return signUp(action.payload);
    case actionTypes.SET_CURRENT_USER:
      // console.log("set current user action", action);
      currentUser = action.payload;
      console.log("currentUser", currentUser);
      document.cookie = "sid=" + JSON.stringify(currentUser);
      return Object.assign({}, state, {
        currentUser
      });
    default:
      console.log("default reducer action");
  }
};

export default authReducer;

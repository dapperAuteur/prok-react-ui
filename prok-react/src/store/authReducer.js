import * as actionTypes from "./actionTypes";
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
  },
  errors: []
};

const authReducer = (state = authInitialState, action) => {
  let currentUser;
  let errors;
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
    case actionTypes.SET_AUTH_ERRORS:
      console.log("action", action);
      currentUser = {};
      errors = action.payload;
      return Object.assign({}, state, errors);
    case actionTypes.SET_CURRENT_USER:
      currentUser = action.payload;
      errors = [];
      console.log("action", action);
      document.cookie = "sid=" + JSON.stringify(currentUser);
      console.log("currentUser", currentUser);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }
      return Object.assign({}, state, currentUser, errors);
    default:
      console.log("default reducer action");
  }
};

export default authReducer;

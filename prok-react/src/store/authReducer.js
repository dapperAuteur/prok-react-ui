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
      currentUser = action.payload;
      console.log("action", action);
      document.cookie = "sid=" + JSON.stringify(currentUser);
      console.log("currentUser", currentUser);
      return Object.assign({}, state, currentUser);
    default:
      console.log("default reducer action");
  }
};

export default authReducer;

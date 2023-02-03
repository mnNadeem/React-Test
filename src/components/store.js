import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isAuthenticated: false,
    token: null,
    email: null,
  },
  posts: {
    data: null,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      const { data } = action;
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          token: action.token,
          email: action.email,
        },
        posts: {
          ...state.posts,
          data,
        },
      };
    case "SIGN_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          token: action.token,
          email: action.email,
        },
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
          token: null,
          email: null,
        },
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    default:
      return state;
  }
}

const store = configureStore({ reducer });

export default store;

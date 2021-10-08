import * as api from "../api";

export const signin = (formData, history) => (dispatch) => {
  try {
    // login the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => (dispatch) => {
  try {
    // sign up the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

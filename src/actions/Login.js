import actionsType from "./actionsType";
import UserApi from "../api/UserApi";
import axios from "axios";

function processLogin(dispatch, data) {
  let { success, message, token, user } = data;

  if (!success) {
    throw data;
  }

  if (success) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  }

  axios.defaults.headers.common["Authorization"] = JSON.stringify(token);
  dispatch(loginSuccess(success, message, user));
}

export function login(email, password){
  return (dispatch) => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return UserApi.login(email, password)
      .then(({ data }) => {
        processLogin(dispatch, data);
      })
      .catch(({ success, message }) => {
        dispatch(loginError(success, message, {}));
      });
  };
}

export function oauthFacebook(data) {
  return (dispatch) => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return UserApi.facebookLogin(data)
      .then(({ data }) => {
        processLogin(dispatch, data);
      })
      .catch(({ success, message }) => {
        dispatch(loginError(success, message, {}));
      });
  };
}

export function logout() {
  return (dispatch) => {
    return UserApi.logout().then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("state");
      dispatch(logoutSuccess());
    });
  };
}

export function loginSuccess(
  success,
  message,
  user
) {
  return {
    type: actionsType.LOGIN_SUCCESS,
    success: success,
    message: message,
    user
  };
}

export function loginError(
  LOGIN_SUCCESS,
  message,
  user
){
  return {
    type: actionsType.LOGIN_ERROR,
    success: success,
    message: message,
    user
  };
}

export function logoutSuccess() {
  return { type: actionsType.LOGOUT_SUCCESS };
}

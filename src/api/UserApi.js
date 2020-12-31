// @flow
import axios from "axios";

class UserApi {
  static login(email, password) {
    return axios
      .post("/api/v1/login", { email, password })
      .then(response => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }

  static facebookLogin(data) {
    return axios
      .post("/api/v1/oauth/facebook", {
        access_token: data
      })
      .then(response => {
        return response;
      })
      .catch(({ response }) => {
        return response;
      });
  }

  static logout() {
    return axios
      .post("/api/v1/logout")
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }

  static createAccount(email, password) {
    return axios
      .post("/api/v1/user", {
        email,
        password
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }

  static updateAccountUser(user) {
    let data = new FormData();
    data.append("user", JSON.stringify(user));
    data.append("image", user.image);

    let config = {
      onUploadProgress: function(progressEvent) {
        return Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    return axios
      .put(`/api/v1/user/${user._id}`, data, config)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default UserApi;

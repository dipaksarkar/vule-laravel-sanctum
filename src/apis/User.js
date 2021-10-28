import Api from "./Api";

export default {
  async register(form) {
    return Api.post("/register", form);
  },

  async login(form) {
    return new Promise((resolve, reject) => {
        Api.post("/login", form).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    });
  },

  async logout() {
    localStorage.setItem("auth", "false");
    localStorage.setItem("token", "");
    return Api.post("/logout");
  },

  auth() {
    return Api.get("/user");
  }
};

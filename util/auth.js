import axios from "axios";

class Authentication {
  constructor() {
    this.API_KEY = "AIzaSyB7scJTEFiXAdi2m0wyUhl1xP0x4uZmoBM";
    this.baseURL = "https://identitytoolkit.googleapis.com/v1/accounts";
  }

  async authenticate(mode, email, password) {
    const url = `${this.baseURL}:${mode}?key=${this.API_KEY}`;

    const { data } = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    return data.idToken;
  }

  createUser(email, password) {
    return this.authenticate("signUp", email, password);
  }

  login(email, password) {
    return this.authenticate("signInWithPassword", email, password);
  }
}

export default new Authentication();
// const API_KEY = "AIzaSyB7scJTEFiXAdi2m0wyUhl1xP0x4uZmoBM";

// export const authenticate = async (mode, email, password) => {
//   const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

//   const { data } = await axios.post(url, {
//     email,
//     password,
//     returnSecureToken: true,
//   });
// };

// export const createUser = async (email, password) => {
//   await authenticate("signUp", email, password);
// };

// export const login = async (email, password) => {
//   await authenticate("signInWithPassword", email, password);
// };

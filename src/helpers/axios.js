import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.privatbank.ua",
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;

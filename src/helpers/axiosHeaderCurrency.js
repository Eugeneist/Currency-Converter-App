import axios from "axios";

const headerCurrency = axios.create({
  baseURL: "https://api.privatbank.ua",
});

headerCurrency.interceptors.response.use(function (response) {
  return response.data;
});

export default headerCurrency;

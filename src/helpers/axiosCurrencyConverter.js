import axios from "axios";

const axiosCurrencyConverter = axios.create({
  baseURL: "https://api.getgeoapi.com",
});

axiosCurrencyConverter.interceptors.response.use(function (response) {
  return response.data;
});

export default axiosCurrencyConverter;

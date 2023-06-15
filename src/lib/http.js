import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-api.atarapay.com/api/",
});

export default instance;

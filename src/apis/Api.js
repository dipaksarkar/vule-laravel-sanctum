import axios from "axios";

const Api = axios.create({
  baseURL: "http://laravelapi.gomedia/api"
});

Api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token")

export default Api;

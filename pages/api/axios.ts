import axios, { AxiosInstance } from "axios";

const Axios = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    params: {
      api_key: process.env.API_KEY,
    },
  });
};

export default Axios;

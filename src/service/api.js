import axios from "axios";

const api = () => {
  const defaultOptions = {
    baseURL: "https://api.chucknorris.io/jokes",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const instace = axios.create(defaultOptions);

  return instace;
};

export default api();
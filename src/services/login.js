import axios from "axios";
import { httpConstants } from "../constants";
function getHeaders() {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
      method: "cors",
      "Access-Control-Allow-Origin": "*",
      skip: true,
    };
  }
const Login = async (data) => {
  const url = "http://localhost:8001/login";
  const loginData = await axios
    .post(url, data,getHeaders)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  return loginData;
};

export default {Login};

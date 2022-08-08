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
const SignUpUser = async (data) => {
  const url='http://localhost:8001/sign-up'
  const signUpData = await axios
    .post(url, data,getHeaders)
    .then((response) => {
      return Promise.resolve( response.data);
    })
    .catch((e) => {
      return Promise.reject(e)
    })
  return signUpData;
};
export default {SignUpUser};

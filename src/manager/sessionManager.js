import Cookies from "universal-cookie";

const cookies = Cookies();

const sessionManager = {
  setDataInCookies,
  getDataFromCookies,
};
export default sessionManager;

const setDataInCookies = (key, data) => {
  cookies.set(key, data, { path: "/" });
};

const getDataFromCookies = (key) => {
  return cookies.get(key);
};

import { httpService } from "../utility/httpService";
import { httpConstants } from "../constants";
import axios from "axios";
export default { productList, fileUpload,saveProduct };

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    method: "cors",
    "Access-Control-Allow-Origin": "*",
    skip: true,
  };
}
async function productList() {
  let url = `http://localhost:8001/get-product`;
  let productList = "";
  await axios
    .get(url, getHeaders)
    .then((response) => {
      productList = response.data.responseData;
    })
    .catch((e) => console.log(e));
  return productList;
}
async function fileUpload(img) {
  let body = new FormData();
  body.set("key", "2cfaea66bba67bd1833e1a0883ec4ce3");
  body.append("image", img);
  return await axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: body,
  });
}
async function saveProduct(req) {
  const url='http://localhost:8001/save-product'
  await axios
    .post(url,req,getHeaders)
    .then((response) => {
      productList = response.data.responseData;
    })
    .catch((e) => console.log(e));
}

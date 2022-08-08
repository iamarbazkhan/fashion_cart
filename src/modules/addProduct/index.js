import AddProduct from "./AddProduct";
import React, { useState } from "react";
import ProductService from "../../services/product";
import { pathConstants } from "../../constants";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'
//Redux 

import {fetchProductList} from '../../redux/actions/productActions'


const mapDispatchToProps=(dispatch)=>{
  return {fetchProductList:()=>{
    dispatch(fetchProductList())
  }}
  }

const AddproductComponent = (props) => {
  const {fetchProductList} = props
  const history=useNavigate();
  let inputFile = React.createRef();
  const [imageData, setImageData] = useState({
    raw: "",
    previewUrl: "",
  });
  const [productBrand, setProductBrand] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [clickSubmit, setClickSubmit] = useState(false);
  const productState = {
    productBrand: productBrand,
    productDetail: productDetail,
    category: category,
    price: price,
    clickSubmit: clickSubmit,
  };
  const upload = async (event) => {
    setImageData({
      raw: event.target.files[0],
      previewUrl: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleUpload = () => {
    inputFile.current.click();
  };
  const saveProduct = async () => {
    const uploadImage = await ProductService.fileUpload(imageData.raw);
    const req = {
      productBrand: productBrand,
      productDetail: productDetail,
      category: category,
      price: price,
      url: uploadImage.data.data.url,
    };
    await ProductService.saveProduct(req);
    setClickSubmit(false);
    fetchProductList()
    history(pathConstants.DASHBOARD_MENU.PRODUCTS);
  };
  return (
    <AddProduct
      handleUpload={handleUpload}
      upload={upload}
      inputFile={inputFile}
      url={imageData.previewUrl}
      setProductBrand={setProductBrand}
      setProductDetail={setProductDetail}
      setCategory={setCategory}
      setPrice={setPrice}
      productState={productState}
      saveProduct={saveProduct}
      setClickSubmit={setClickSubmit}
    />
  );
};
export default connect(undefined,mapDispatchToProps)(AddproductComponent);

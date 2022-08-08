import React, { useState } from "react";
import styled from "styled-components";
import { BarsLoader } from "react-loaders-kit";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
const AddProductMainDiv = styled.div`
  padding: 17px 100px 100px 100px;
  text-align: center;
  margin: 50px 0px 0px 25%;
  border: solid 2px #e9f0ee;
  width: 500px;
  height: 930px;
`;
const UploadButton = styled.a`
  text-decoration: none !important;
  width: 110px;
  height: 19px;
  font-family: MuseoSans !important;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.19;
  text-align: left;
  color: #1caed0;
  border: none;
  background: none;
  padding-left: 0px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const ImageDiv = styled.div`
  width: 200px;
  height: 200px;
  border: dotted;
  margin: 30px 10px 30px 30px;
`;
const Div = styled.div`
  width: 300px;
  height: 300px;
  margin: 30px 10px 30px 113px;
`;
const AddProductFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductType = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductCategory = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 18px;
  color: black;
  font-family: Roboto;
  margin: 20px 0px 5px 0px;
`;
const Input = styled.input`
  padding: 20px;
  font-size: 18px;
  border-radius: 8px;
  text-align: center;
`;
const SubmitButton = styled.button`
  background-color: #8fb8aa;
  border: none;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  text-align: center;
  border-radius: 7px;
  cursor: ${(props) => (props.click ? "not-allowed" : "pointer")};
  disabled: ${(props) => props.click};
`;
const FormName = styled.h1`
  color: #8fb8aa;
  font-family: Roboto;
`;
const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputError = styled.div`
  font-family: Roboto;
  color: red;
  font-size: 14px;
`;
const Img = styled.img`
width: 200px;
  height: 200px;
`;
function AddProduct(props) {
  const {
    setClickSubmit,
    setProductBrand,
    setProductDetail,
    setCategory,
    setPrice,
    url,
    saveProduct,
    productState,
  } = props;
  const [allFieldsEntered, setAllFieldsEnter] = useState(false);
  const checkAllEnterFields = () => {
     const allCheck= (
      productState.productBrand.length &&
      productState.productDetail.length &&
      productState.category.length &&
      productState.price &&
      url.length
    );
    return allCheck;
  };
  const onCickProductSubmit = () => {
    setAllFieldsEnter(checkAllEnterFields());
    setClickSubmit(true);
    {!allFieldsEntered && saveProduct()};
   
  };
  return (
    <AddProductMainDiv>
      <FormName>Add Product</FormName>
      <Div>
        <ImageDiv>
          <Img src={url} />
        </ImageDiv>
        <input
          type="file"
          multiple={false}
          accept="image/*"
          ref={props.inputFile}
          style={{ display: "none" }}
          onChange={props.upload}
        />
        {!url.length && productState.clickSubmit ? (
          <InputError>Please Upload Image</InputError>
        ) : (
          ""
        )}
        <UploadButton onClick={props.handleUpload}>Browse Files</UploadButton>
      </Div>
      <AddProductFormDiv>
        <ProductName>
          <Title>Product Brand</Title>
          <InputField>
            <Input
              onChange={(e) => setProductBrand(e.target.value)}
              placeholder="Please Enter Product Brand"
            />
            {!productState.productBrand.length && productState.clickSubmit ? (
              <InputError>Please Enter Product Brand</InputError>
            ) : (
              ""
            )}
          </InputField>
        </ProductName>
        <ProductType>
          <Title>Product Detail</Title>
          <InputField>
            <Input
              onChange={(e) => setProductDetail(e.target.value)}
              placeholder="Please Enter Product Detail"
            />
            {!productState.productDetail.length && productState.clickSubmit ? (
              <InputError>Please Enter Product Detail</InputError>
            ) : (
              ""
            )}
          </InputField>
        </ProductType>
        <ProductCategory>
          <Title>Category</Title>
          <InputField>
            <Input
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Please Enter Product Category"
              required
            />
            {!productState.category.length && productState.clickSubmit ? (
              <InputError>Please Enter Product Category</InputError>
            ) : (
              ""
            )}
          </InputField>
        </ProductCategory>
        <ProductPrice>
          <Title>Product Price</Title>
          <InputField>
            <Input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Please Enter Product Price"
            />
            {!productState.price && productState.clickSubmit ? (
              <InputError>Please Enter Product Price</InputError>
            ) : (
              ""
            )}
          </InputField>
        </ProductPrice>
        <SubmitButton
          click={productState.clickSubmit && allFieldsEntered}
          onClick={() => onCickProductSubmit()}
        >
          {productState.clickSubmit && allFieldsEntered ? (
            <BarsLoader
              loading={productState.clickSubmit && allFieldsEntered}
            />
          ) : (
            "Save Product"
          )}
        </SubmitButton>
      </AddProductFormDiv>
    </AddProductMainDiv>
  );
}

export default AddProduct;

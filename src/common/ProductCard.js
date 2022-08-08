import React, { useState } from "react";
import styled from "styled-components";
import { Favorite} from "@material-ui/icons";
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 280px;
  height: 410px;
  background-color: #f8f9f9;
  padding: 10px;
  transition: width 0s, height 0s;
  border: 3px solid #d6f5d6;
`;
const ProductImage = styled.img`
  height: 310px;
  width: 280px;
  border-radius: 4px;
`;
const ProductName = styled.div`
  font-size: 13px;
`;
const ProductType = styled.div``;
const Price = styled.div`
  font-weight: bold;
`;
const ProductDetail = styled.div`
  display: flex;
  font-family: serif;
  margin-top: 8px;
  flex-direction: column;
`;
const AddToCartButton = styled.button`
  width: 152px;
  transition: width 0s, height 0s;
  margin-left: 90px;
  background-color: #ffffff;
  height: 32px;
  justify-content: center;
  color: #8fb8aa;
  border-radius: 4px;
  border: 1px solid #8fb8aa;
  &:hover {
    width: 155px;
    height: 35px;
  }
`;
const ProductDeatailAndHeartIcon = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeartIcon = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;
function ProductCard(props) {
  const { productBrand, productDetail, category, availableSize, price, url } =
    props.data;
  const [favorite, setFavorite] = useState(false);
  const onClickFavoriteProduct = () => {
    setFavorite(!favorite);
  };
  return (
    <ProductContainer>
      <ProductImage src={url} />
      <ProductDetail>
        <ProductDeatailAndHeartIcon>
          <ProductType>{productDetail}</ProductType>
          <HeartIcon>
            <Favorite
              color={favorite ? "secondary" : "disabled"}
              onClick={() => onClickFavoriteProduct()}
            />
          </HeartIcon>
        </ProductDeatailAndHeartIcon>
        <ProductType>{availableSize}</ProductType>
        <Price>Rs {price}</Price>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </ProductDetail>
    </ProductContainer>
  );
}

export default ProductCard;

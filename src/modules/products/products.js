import React,{useEffect,useState} from 'react'
import utility from "../../utility"
import productListService from "../../services/product"
import styled from 'styled-components'
import ProductComponent from '../../common/ProductCard'
import product from '../../services/product'
const ProductHeading=styled.h1 `
font-size:32px;
text-align: center;
font-family:Roboto;
font-weight:500;
`;
const ProductComponents=styled.div `
 width:100%;
 height:100%;
`;
const ProductListDiv=styled.div `
display:grid;
grid-template-columns:repeat(4,2fr);
gap: 30px ;
margin:20px;
`;
const DataNotFound=styled.p``;
function Products(props) {
    const {products}=props;
    return (
        <ProductComponents>
            <ProductHeading>Products</ProductHeading>
            <ProductListDiv>
                {products?.length ? products.map((product,idx)=>(
                    <ProductComponent data={product} key={idx}/>
                )):
                 <DataNotFound>No data found!!</DataNotFound>

                }

            </ProductListDiv>
        </ProductComponents>

    )
}

export default Products

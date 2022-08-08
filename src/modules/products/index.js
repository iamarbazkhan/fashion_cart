import Products from "./products";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    productList: state.allProducts,
  };
};
const ProductListComponent = (props) => {
  const { productList } = props;
  const [products, setProducts] = useState("");
  useEffect(() => {
    setProducts(productList.products[0]);
  }, [productList]);
  return <Products products={products} />;
};
export default connect(mapStateToProps, undefined)(ProductListComponent);

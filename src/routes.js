import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Switch } from 'react-router'
import Dashboard from "./modules/dashboard";
import { connect } from "react-redux";
function Router() {
  return (
    <Routes>
      <Route exact path={"/dashboard/:menu"} element={<Dashboard />} />
      <Route exact path={"/dashboard/addProduct"} element={<Dashboard />} />
      <Route exact path={"/dashboard/products"} element={<Dashboard />} />
      <Route exact path={"/dashboard/:menu/:subMenu"} element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="/dashboard/home" />} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};
export default Router;

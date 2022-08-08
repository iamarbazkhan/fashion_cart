// Created by Mohd Arbaz Khan 
// We don't need to write constant url we import that from here.

export const  pathConstants={
    DASHBOARD_MENU:{
        HOME:'/dashboard/home',
        ADD_PRODUCT:'/dashboard/addProduct',
        PRODUCTS:'/dashboard/products',
        ABOUT_US:'/dashboard/aboutUs',
        LOGIN:'/dashboard/login'
    }
}
export const httpConstants = {
    METHOD_TYPE: {
      POST: "POST",
      PUT: "PUT",
      GET: "GET",
      DELETE: "DELETE",
    },
    CONTENT_TYPE: {
      APPLICATION_JSON: "application/json",
      MULTIPART_FORM_DATA: "multipart/form-data",
      APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
      IMAGE_PNG: "image/png",
    },
    DEVICE_TYPE: {
      WEB: "web",
    },
    API_END_POINT: {
      FIND_HOSPITAL:"/find-hospital",
      HOSPITAL:"/hospital",
      HOSPITALS:"/hospitals",
      HOSPITAL_LIST:"/hospital-list",
      FILE_UPLOAD:"/uploadFile",
      ADVERTISER:"/advertiser",
      ADVERTISERS_LIST:"/advertisers-list",
      PRODUCT_LIST:"/product-list",
      CONTENT_LIST:"/content-list",
      FIND_CONTENT:"/content",
      SUB_CATEGORY_LIST:"/categories",
      SUB_CATEGORY:"/category",
      ADD_PRODUCT:"/add-products",
      UPDATE_PRODUCT: "/update-products",
      PRODUCT: "/product",
      PRODUCT_KEYWORDS:"/product-keywords",
      // FIND_CONTENT:"/content",
      // ADD_PRODUCT:"/add-products",
      DELETE_SUB_CATEGORY:"/delete-subcategory",
      // DELETE_SUB_CATEGORY:"/delete-subcategory",
      PRODUCTS_ON_ADVERTISER:"/advertiser-product-list",
      CONTENTS_ON_ADVERTISER:"/advertiser-content",
      ALL_AD_SPEND_LIST:"/all-ad-spend-details",
      USER:"/get-auth-user",
      FETCH_SUB_CATEGORY:"/fetch-subcategories",
      TOTAL_REPORT:"/get-reports",
      ADS_VIEW_BY_SOURCE: "/ads-views-by-source",
  
    },
  };
  
  export const eventConstants = {
    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    UPDATE_USER_DATA_SUCCESS: "UPDATE_USER_DATA_SUCCESS",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  };
  
  export const cookiesConstants = {
    DEVICE_ID: "deviceId",
    SESSION_TOKEN: "sessionToken",
    ACCESS_TOKEN: "accessToken",
    ID_TOKEN: "idToken",
    EXPIRES_AT: "expiresAt",
    USER: "user",
    COMPANY: "company",
    USER_META_DATA: "userMetaData",
    USER_DETAILS: "userDetails",
  };
  

  export const dashboardMenuImages = {
    HOSPITALS: {
      true: "/images/hospital-active.svg",
      false: "/images/hospital-inactive.svg",
    },
    ADVERTISERS: {
      true: "/images/advertisers-active.svg",
      false: "/images/advertisers-inactive.svg",
    },
    REPORTS: {
      true: "/images/reports-active.svg",
      false: "/images/reports-inactive.svg",
    },
    CONTENT: {
      true: "/images/content-active.svg",
      false: "/images/content-inactive.svg",
    },
    PRODUCTS: {
      true: "/images/products-active.svg",
      false: "/images/products-inactive.svg",
    },
    SETTINGS: {
      true: "/images/settings-active.svg",
      false: "/images/settings-inactive.svg",
    },
  };
  
  export const Roles ={
    SUPER_ADMIN:"rol_YDLC60fcYYlFUGb4"
  };
  
  export const genericConstants = {
    INCORRECT_EMAIL_PASSWORD:"Incorrect email or password.",
    LOGIN_SUCCESSFULL:"Login Successful",
    DO_NOT_HAVE_PERMISSION:"You Do Not Have Permission",
    CANT_GET_USER_DETAILS:"Can't Get User Details"
  }
import axios from "axios";
// import _ from "lodash";

const mainRequestConfig = {
  // Mock baseURL is from a local Postman Mock Server
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
};

const mainAxiosInstance = axios.create(mainRequestConfig);

mainAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

const mainRequest = (
  url,
  payload,
  method,
  headers = { "X-Requested-With": "XMLHttpRequest" }
) => {
  const data = payload;
  let params;
  if (method === "get") {
    params = payload;
  }
  return mainAxiosInstance(url, { data, params, method, headers });
};

const SERVICES = {
  /* <CUSTOMERS> */
  loginAdmin: (payload) => mainRequest(`/admin/login/`, payload, "post"),

  /* <CATEGORIES> */
  getCategories: (payload) => mainRequest(`/category/`, payload, "get"),
  updateCategories: (payload) =>
    mainRequest(`/category/${payload.category_id}/`, payload, "put"),
  postCategory: (payload) => mainRequest(`/category/`, payload, "post"),
  deleteCategory: (payload) =>
    mainRequest(`/category/${payload.category_id}/`, payload, "delete"),

    /* <PRODUCT> */
  getProducts: (payload) => mainRequest(`/products/`, payload, "get"),
  postProduct: (payload) => mainRequest(`/products/`, payload, "post"),
  deleteProduct: (payload) =>
    mainRequest(`/products/${payload.product_id}/`, payload, "delete"),
};

export default SERVICES;

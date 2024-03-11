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
  getProductDetail: (payload) =>
    mainRequest(`/products/detail/${payload.product_id}/`, null, "get"),
  updateProduct: (payload) =>
    mainRequest(`/products/${payload.product_id}/`, payload, "put"),
  updateProductStatus: (payload) =>
    mainRequest(
      `/products/updateStatus/${payload.product_id}/`,
      payload,
      "put"
    ),

  /* <GALLERIES> */
  listGalleries: (payload) =>
    mainRequest(`/galleries/${payload.product_id}/`, payload, "get"),
  postGalleries: (payload) =>
    mainRequest(`/galleries/multiple/`, payload, "post"),
  deleteGallery: (payload) =>
    mainRequest(`/galleries/${payload.gallery_id}/`, payload, "delete"),

  /* <ORDER> */
  getOrders: (payload) => mainRequest(`/order/`, payload, "get"),
  updateOrderStatus: (payload) =>
    mainRequest(`/order/${payload.order_id}/`, payload, "put"),

  /* <CUSTOMER> */
  getCustomer: (payload) => mainRequest(`/customer/`, payload, "get"),
  deleteCustomer: (payload) =>
    mainRequest(`/customer/${payload.customer_id}/`, payload, "delete"),

  /* <NEWS> */
  getNews: (payload) => mainRequest(`/news/`, payload, "get"),
  deleteNews: (payload) =>
    mainRequest(`/news/${payload.news_id}/`, payload, "delete"),
  getNewsDetail: (payload) =>
    mainRequest(`/news/${payload.news_id}/`, payload, "get"),
  postNews: (payload) => mainRequest(`/news/`, payload, "post"),
  updateNews: (payload) =>
    mainRequest(`/news/${payload.news_id}/`, payload, "put"),
  updateNewsStatus: (payload) =>
    mainRequest(`/news/updateStatus/${payload.news_id}/`, payload, "put"),

  /* <COUPON> */
  getCoupon: (payload) => mainRequest(`/coupon/`, payload, "get"),
  deleteCoupon: (payload) =>
    mainRequest(`/coupon/${payload.coupon_id}/`, payload, "delete"),
  postCoupon: (payload) => mainRequest(`/coupon/`, payload, "post"),
  updateCoupon: (payload) =>
    mainRequest(`/coupon/${payload.coupon_id}/`, payload, "put"),
};

export default SERVICES;

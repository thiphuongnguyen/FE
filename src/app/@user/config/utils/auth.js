import Cookies from "js-cookie";
import Notification from "../components/atoms/Notification";
import SERVICES from "../services";

export const LoginCustomer = async (payload) => {
  try {
    const { data, status } = await SERVICES.loginCustomer(payload);
    if (status === 200) {
      Cookies.set("token", data.data.access_token);
      const id_customer = btoa(data.data.customer.customer_id); // Sử dụng hàm btoa() để mã hóa Base64
      Cookies.set("id_customer", id_customer);
      Notification.success("Success !");
    } else {
      logError(data);
    }
  } catch (error) {
    Notification.error("Username or password is incorrect!");
  }
};

export const SignupCustomer = async (payload) => {
  try {
    const { data, status } = await SERVICES.signupCustomer(payload);
    if (status === 201) {
      Notification.success("Success !");
    } else {
      logError(data);
    }
  } catch (error) {
    Notification.error("Account already exists!!");
  }
};

export const ListProducts = async (payload) => {
  try {
    const { data, status } = await SERVICES.getProducts(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListProductsByCategory = async (payload) => {
  try {
    const { data, status } = await SERVICES.getProductByCategory(
      payload.params
    );
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const BuyProduct = async (payload) => {
  try {
    const { data, status } = await SERVICES.buyProduct(payload);
    if (status === 200) {
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListCarts = async (payload) => {
  try {
    const { data, status } = await SERVICES.getCarts(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const DeleteProductCart = async (payload) => {
  try {
    const { data, status } = await SERVICES.deleteProductCart(payload);
    if (status === 200) {
      return data.data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const DeleteAllProductCart = async (payload) => {
  try {
    const { data, status } = await SERVICES.deleteAllProductCart(payload);
    if (status === 200) {
      return data.data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const UpdateProductCart = async (payload) => {
  try {
    const { data, status } = await SERVICES.updateProductCart(payload);
    if (status === 200) {
      return data.data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListCategories = async () => {
  try {
    const { data, status } = await SERVICES.getCategories();
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListProvinces = async () => {
  try {
    const { data, status } = await SERVICES.getProvinces();
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListDistricts = async (payload) => {
  try {
    const { data, status } = await SERVICES.getDistricts(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const ListWards = async (payload) => {
  try {
    const { data, status } = await SERVICES.getWards(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const OrderProduct = async (payload) => {
  try {
    const { data, status } = await SERVICES.orderProduct(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const GetProductDetail = async (payload) => {
  try {
    const { data, status } = await SERVICES.getProductDetail(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const GetProductRelated = async (payload) => {
  try {
    const { data, status } = await SERVICES.getProductRelated(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const GetGalleries = async (payload) => {
  try {
    const { data, status } = await SERVICES.getGalleries(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const GetProductSearch = async (payload) => {
  try {
    const { data, status } = await SERVICES.getProductSearch(payload);
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

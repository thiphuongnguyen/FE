import Cookies from "js-cookie";
import Notification from "../components/atoms/Notification";
import SERVICES from "../services";

export const LoginAdmin = async (payload) => {
  try {
    const { data, status } = await SERVICES.loginAdmin(payload);
    if (status === 200) {
      const dataAdmin = {
        admin_id: data.admin.admin_id,
        admin_name: data.admin.admin_name,
        admin_phone: data.admin.admin_phone,
        admin_image: data.admin.admin_image,
        admin_role: data.admin.admin_role,
      };

      localStorage.setItem("admin", JSON.stringify(dataAdmin));
    } else {
      logError(data);
    }
  } catch (error) {
    Notification.error("Username or password is incorrect!");
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

export const UpdateCategories = async (payload) => {
  try {
    const { data, status } = await SERVICES.updateCategories(payload);
    if (status === 200) {
      return data.data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const PostCategory = async (payload) => {
  try {
    const { data, status } = await SERVICES.postCategory(payload);
    if (status === 200) {
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const DeleteCategory = async (payload) => {
  try {
    const { data, status } = await SERVICES.deleteCategory(payload);
    if (status === 200) {
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};


export const ListProducts = async () => {
  try {
    const { data, status } = await SERVICES.getProducts();
    if (status === 200) {
      return data;
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const PostProduct = async (payload) => {
  try {
    const { data, status } = await SERVICES.postProduct(payload);
    if (status === 200) {
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};

export const DeleteProduct = async (payload) => {
  try {
    const { data, status } = await SERVICES.deleteProduct(payload);
    if (status === 200) {
    } else {
      logError(data);
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
};
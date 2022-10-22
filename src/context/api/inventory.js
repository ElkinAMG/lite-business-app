import Axios from "./axiosInstance";
import Swal from "sweetalert2";

export async function GetInventoryByUser(page, id) {
  try {
    return (await Axios.get(`product?id=${id}&page=${page}`)).data;
  } catch (err) {
    throw err;
  }
}

export async function GetProduct(sku) {
  try {
    return (await Axios.get(`product/${sku}`)).data;
  } catch (err) {
    throw err;
  }
}

export async function CreateProduct({
  sku,
  name,
  description,
  enterpriseId,
  stock,
}) {
  try {
    await Axios.post("product", {
      sku,
      name,
      description,
      enterpriseId,
      stock,
    });
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Este artículo no pudo ser creado",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw err;
  }
}

export async function DeleteProduct(id) {
  try {
    await Axios.delete(`product/${id}`);
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Este artículo no pudo ser eliminado",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw err;
  }
}

export async function UpdateProduct(sku, { name, description, stock }) {
  try {
    await Axios.put(`product/${sku}`, {
      SKU: sku,
      name,
      description,
      stock,
    });
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Este producto no pudo ser actualizada",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw err;
  }
}

export async function SendInventory({ id, email }) {
  try {
    await Axios.post(`pdf_inventory/${id}`, { email });
  } catch (err) {
    throw err;
  }
}

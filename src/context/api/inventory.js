import axiosClient from "./axiosInstance";

export async function GetInventoryByUser(page, id) {
  try {
    return (await axiosClient.get(`product?id=${id}&page=${page}`)).data;
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
    await axiosClient.post(`product`, {
      sku,
      name,
      description,
      enterpriseId,
      stock,
    });
  } catch (err) {
    throw err;
  }
}

export async function SendInventory({ id, email }) {
  try {
    await axiosClient.post(`pdf_inventory/${id}`, { email });
  } catch (err) {
    throw err;
  }
}

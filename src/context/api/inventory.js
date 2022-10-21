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
    axiosClient.post(
      `product
    `,
      { sku, name, description, enterpriseId, stock }
    );
  } catch (err) {
    throw err;
  }
}

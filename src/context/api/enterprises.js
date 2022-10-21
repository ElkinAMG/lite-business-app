import axiosClient from "./axiosInstance";

export async function CreateEnterprise({ nit, name, address, phone }) {
  try {
    axiosClient.post(`enterprise`, { nit, name, address, phone });
  } catch (err) {
    throw err;
  }
}

export async function GetEnterprises(page) {
  try {
    return (await axiosClient.get(`enterprises?page=${page}`)).data;
  } catch (err) {
    throw err;
  }
}

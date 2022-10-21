import axiosClient from "./axiosInstance";
import Swal from "sweetalert2";

export async function CreateEnterprise({ nit, name, address, phone }) {
  try {
    await axiosClient.post(`enterprise`, { nit, name, address, phone });
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Esta empresa no pudo ser creada",
      icon: "error",
      confirmButtonText: "OK",
    });
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

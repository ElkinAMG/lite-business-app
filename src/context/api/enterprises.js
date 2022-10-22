import Axios from "./axiosInstance";
import Swal from "sweetalert2";

export async function CreateEnterprise({ nit, name, address, phone }) {
  try {
    await Axios().post(`enterprise`, { nit, name, address, phone });
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

export async function DeleteEnterprise(id) {
  try {
    await Axios().delete(`enterprise/${id}`);
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Esta empresa no pudo ser eliminada",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw err;
  }
}

export async function GetEnterprise(id) {
  try {
    return (await Axios().get(`enterprise/${id}`)).data;
  } catch (err) {
    throw err;
  }
}

export async function UpdateEnterprise(id, { name, address, phone }) {
  try {
    await Axios().put(`enterprise/${id}`, { NIT: id, name, address, phone });
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: "Esta empresa no pudo ser actualizada",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw err;
  }
}

export async function GetEnterprises(page) {
  try {
    return (await Axios().get(`enterprises?page=${page}`)).data;
  } catch (err) {
    throw err;
  }
}

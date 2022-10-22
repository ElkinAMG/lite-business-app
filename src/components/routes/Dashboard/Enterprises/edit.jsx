import { useNavigate, useParams } from "react-router-dom";
import {
  UpdateEnterprise,
  GetEnterprise,
} from "../../../../context/api/enterprises";

import useFecth from "../../../../hooks/useFetch";
import useForm from "../../../../hooks/useForm";

import Swal from "sweetalert2";

import Input from "../../../Input";

export default function EditEnterprise() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useFecth(GetEnterprise, id);

  const { form, handleFormChange, submitForm, errors } = useForm(
    {
      nit: [/.{1,}/],
      name: [/.{1,}/],
      address: [/.{1,}/],
      phone: [/.{1,}/],
    },
    {
      nit: data.NIT,
      name: data.name,
      address: data.address,
      phone: data.phone,
    },
    isLoading
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitForm(() => {
      UpdateEnterprise(id, form)
        .then(() =>
          Swal.fire({
            title: "¡Empresa actualizada!",
            text: "Esta empresa ha sido actualizada",
            icon: "success",
            confirmButtonText: "OK",
          })
        )
        .finally(() => navigate("/dashboard/enterprises"));
    });
  };

  return (
    <form
      className="flex flex-col"
      onChange={handleFormChange}
      onSubmit={onFormSubmit}
    >
      <Input
        validation={errors}
        name="nit"
        label="NIT"
        placeholder="Ingrese el NIT de la empresa"
        width="w-11/12"
        requirements={["Este campo no debe estar vacío"]}
        defaultValue={data["NIT"]}
        disabled
        required
      />
      <Input
        validation={errors}
        name="name"
        label="Nombre de la empresa"
        placeholder="Ingrese el nombre de la empresa"
        width="w-11/12"
        requirements={["Este campo no debe estar vacío"]}
        defaultValue={form["name"]}
        required
      />
      <Input
        validation={errors}
        name="address"
        label="Dirección"
        placeholder="Ingrese la dirección de la empresa"
        width="w-11/12"
        requirements={["Este campo no debe estar vacío"]}
        defaultValue={form["address"]}
        required
      />
      <Input
        validation={errors}
        name="phone"
        label="Teléfono de la empresa"
        placeholder="Ingrese el teléfono de la empresa"
        width="w-11/12"
        type="number"
        requirements={["Este campo no debe estar vacío"]}
        defaultValue={form["phone"]}
        required
      />
      <button className="bg-blue-700 p-2 rounded-md text-white text-lg w-11/12 mx-auto hover:opacity-90">
        Actualizar Empresa
      </button>
    </form>
  );
}

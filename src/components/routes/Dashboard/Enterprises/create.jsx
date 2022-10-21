import { useNavigate } from "react-router-dom";
import { CreateEnterprise as handleCreateEnterprise } from "../../../../context/api/enterprises";

import useForm from "../../../../hooks/useForm";

import Input from "../../../Input";

export default function CreateEnterprise() {
  const navigate = useNavigate();
  const { form, handleFormChange, submitForm, errors } = useForm({
    nit: [/.{1,}/],
    name: [/.{1,}/],
    address: [/.{1,}/],
    phone: [/.{1,}/],
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitForm(() => {
      handleCreateEnterprise(form).finally(() => navigate("/dashboard/enterprises"));
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
        required
      />
      <Input
        validation={errors}
        name="name"
        label="Nombre de la empresa"
        placeholder="Ingrese el nombre de la empresa"
        width="w-11/12"
        requirements={["Este campo no debe estar vacío"]}
        required
      />
      <Input
        validation={errors}
        name="address"
        label="Dirección"
        placeholder="Ingrese la dirección de la empresa"
        width="w-11/12"
        requirements={["Este campo no debe estar vacío"]}
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
        required
      />
      <button className="bg-blue-700 p-2 rounded-md text-white text-lg w-11/12 mx-auto hover:opacity-90">
        Publicar Nueva Empresa
      </button>
    </form>
  );
}

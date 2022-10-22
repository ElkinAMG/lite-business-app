import { useNavigate } from "react-router-dom";
import { GetProduct, UpdateProduct } from "../../../../context/api/inventory";

import useFecth from "../../../../hooks/useFetch";

import { useParams } from "react-router-dom";
import useForm from "../../../../hooks/useForm";

import Swal from "sweetalert2";

import Input from "../../../Input";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id, sku } = useParams();

  const { data, isLoading } = useFecth(GetProduct, sku);

  const { form, handleFormChange, submitForm, errors } = useForm(
    {
      sku: [/.{1,}/],
      name: [/.{1,}/],
      description: [],
      stock: [/.{1,}/],
    },
    {
      sku: data.SKU,
      name: data.name,
      description: data.description,
      stock: data.stock,
    },
    isLoading
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitForm(() => {
      UpdateProduct(sku, form)
        .then(() =>
          Swal.fire({
            title: "¡Producto actualizado!",
            text: "Se ha actualizado el producto",
            icon: "success",
            confirmButtonText: "OK",
          })
        )
        .finally(() => navigate(`/dashboard/inventory/${id}`));
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
        name="sku"
        label="SKU"
        placeholder="Ingrese el SKU del producto"
        width="w-11/12"
        requirements={["Este campo no puede estar vacío"]}
        defaultValue={sku}
        disabled
        required
      />
      <Input
        validation={errors}
        name="name"
        label="Nombre del producto"
        placeholder="Ingrese el nombre del producto"
        width="w-11/12"
        requirements={["Este campo no puede estar vacío"]}
        defaultValue={form["name"]}
        required
      />
      <Input
        validation={errors}
        name="description"
        label="Descripción"
        placeholder="Ingrese una descripción para el producto"
        defaultValue={form["description"]}
        width="w-11/12"
        type="textarea"
      />
      <Input
        validation={errors}
        name="stock"
        label="Cantidad disponible"
        placeholder="Ingrese la cantidad disponible"
        width="w-11/12"
        type="number"
        defaultValue={form["stock"]}
        requirements={["Este campo no puede estar vacío"]}
        required
      />
      <button className="bg-blue-700 transition-opacity p-2 rounded-md text-white text-lg w-11/12 mx-auto hover:opacity-90">
        Crear Producto
      </button>
    </form>
  );
}

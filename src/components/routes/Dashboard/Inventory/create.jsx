import { useNavigate } from "react-router-dom";
import { CreateProduct as handleCreateProduct } from "../../../../context/api/inventory";

import { useParams } from "react-router-dom";
import useForm from "../../../../hooks/useForm";

import Swal from "sweetalert2";

import Input from "../../../Input";

export default function CreateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { form, handleFormChange, submitForm, errors } = useForm({
    sku: [/.{1,}/],
    name: [/.{1,}/],
    description: [],
    stock: [/.{1,}/],
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitForm(() => {
      handleCreateProduct({ ...form, enterpriseId: id })
        .then(() =>
          Swal.fire({
            title: "¡Artículo creado!",
            text: "Se ha creado un nuevo artículo en el inventario de esta empresa",
            icon: "success",
            confirmButtonText: "OK",
          })
        )
        .finally(() => navigate(-1));
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
        required
      />
      <Input
        validation={errors}
        name="name"
        label="Nombre del producto"
        placeholder="Ingrese el nombre del producto"
        width="w-11/12"
        requirements={["Este campo no puede estar vacío"]}
        required
      />
      <Input
        validation={errors}
        name="description"
        label="Descripción"
        placeholder="Ingrese una descripción para el producto"
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
        requirements={["Este campo no puede estar vacío"]}
        required
      />
      <button className="bg-blue-700 transition-opacity p-2 rounded-md text-white text-lg w-11/12 mx-auto hover:opacity-90">
        Crear Producto
      </button>
    </form>
  );
}

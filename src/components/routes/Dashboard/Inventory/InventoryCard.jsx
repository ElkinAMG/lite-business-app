import { Link } from "react-router-dom";
import { DeleteProduct } from "../../../../context/api/inventory";

import Swal from "sweetalert2";

export default function InventoryCard({ product, reloadPage }) {
  const onDeleteProduct = async () => {
    await Swal.fire({
      title: "¿Estás seguro?",
      text: "Estás a punto de eliminar una empresa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await DeleteProduct(product.SKU).then(() => reloadPage());
        await Swal.fire(
          "¡Eliminada!",
          "Esta empresa ha sido eliminada",
          "success"
        );
      }
    });
  };

  return (
    <div className="my-2 cursor-pointer rounded shadow-lg shadow-gray-200 bg-white duration-300 hover:-translate-y-1">
      <span className="flex justify-end gap-4 pt-2 pr-2 m-0 pb-0">
        <span onClick={onDeleteProduct} title="Delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c92d63"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="arcs"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </span>
        <Link to={`edit/${product?.SKU}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e5ca23"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="arcs"
          >
            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
          </svg>
        </Link>
      </span>
      <figure>
        <figcaption className="p-4">
          <p className="text-lg m-0 font-bold leading-relaxed text-gray-800">
            {product?.name}
          </p>
          <small className="leading-5 mb-5 text-gray-500 block">
            SKU: {product?.SKU}
          </small>

          <span className="leading-5 text-gray-300 text-xs">Stock</span>
          <p className="leading-5 text-gray-500 ">{product?.stock}</p>

          <span className="leading-5 text-gray-300 text-xs">Descripción</span>
          <p className="leading-5 text-gray-500 ">
            {product?.description || "No disponible"}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

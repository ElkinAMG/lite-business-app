import { useContext } from "react";
import { Link } from "react-router-dom";

import { userContext } from "../../../../context/index";

import { DeleteEnterprise } from "../../../../context/api/enterprises";

import Swal from "sweetalert2";

export default function EnterprisesCard({
  enterprise,
  itemRedirect,
  reloadPage,
}) {
  const { user } = useContext(userContext);

  const onDeleteEnterprise = async () => {
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
        await DeleteEnterprise(enterprise.NIT).then(() => reloadPage());
        await Swal.fire(
          "¡Eliminada!",
          "Esta empresa ha sido eliminada",
          "success"
        );
      }
    });
  };

  return (
    <div className="my-2 cursor-pointer rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-700 duration-300 hover:-translate-y-1">
      {user.isLoggedIn && (
        <span className="flex justify-end gap-4 pt-2 pr-2 m-0 pb-0">
          <span onClick={onDeleteEnterprise} title="Delete">
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
          <Link to={`edit/${enterprise?.NIT}`} title="Edit">
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
      )}

      <Link to={itemRedirect && `/dashboard/inventory/${enterprise?.NIT}`}>
        <figure>
          <figcaption className="p-4">
            <p className="text-lg m-0 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              {enterprise?.name}
            </p>
            <small className="leading-5 mb-5 text-gray-500 dark:text-gray-400 block">
              NIT: {enterprise?.NIT}
            </small>

            <span className="leading-5 text-gray-300 text-xs">Celular</span>
            <p className="leading-5 text-gray-500 dark:text-gray-400">
              {enterprise?.phone}
            </p>

            <span className="leading-5 text-gray-300 text-xs">Dirección</span>
            <p className="leading-5 text-gray-500 dark:text-gray-400">
              {enterprise?.address}
            </p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}

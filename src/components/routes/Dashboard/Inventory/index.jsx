import { Link, Outlet, useParams } from "react-router-dom";

import {
  DownloadInventory,
  SendInventory,
} from "../../../../context/api/inventory";

import Swal from "sweetalert2";

export default function ProfileInventory() {
  const { id } = useParams();

  const sendEmail = async () => {
    const { value: email } = await Swal.fire({
      title: "Enviar PDF del inventario",
      input: "email",
      inputLabel: "Correo electrónico",
      inputPlaceholder: "Ingrese un correo electrónico",
    });

    if (email) {
      await SendInventory({ id, email }).then(() =>
        Swal.fire({
          title: "¡Correo enviado!",
          text: "El correo se ha enviado correctamente",
          icon: "success",
          confirmButtonText: "OK",
        })
      );
    }
  };

  const onDownloadInventory = async () => {
    await DownloadInventory(id);
  };

  return (
    <main className="w-screen p-10">
      <h1 className="text-center text-4xl text-blue-700 font-semibold">
        Inventario
      </h1>
      <div className="mt-5 flex gap-2 justify-end">
        <button
          onClick={onDownloadInventory}
          className="bg-red-600 p-2 rounded-md text-white text-lg hover:opacity-90 transition-opacity"
        >
          Descargar en PDF
        </button>
        <button
          onClick={sendEmail}
          className="bg-red-600 p-2 rounded-md text-white text-lg hover:opacity-90 transition-opacity"
        >
          Enviar PDF por correo
        </button>
        <Link to="create">
          <button className="bg-blue-700 p-2 rounded-md text-white text-lg hover:opacity-90 transition-opacity">
            Crear Artículo
          </button>
        </Link>
      </div>
      <Outlet />
    </main>
  );
}

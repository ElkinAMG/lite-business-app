import { Link, Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function ProfileInventory() {
  const { id } = useParams();

  return (
    <main className="w-screen p-10">
      <h1 className="text-center text-4xl text-blue-700 font-semibold">
        Inventario
      </h1>
      <div className="mt-5 flex gap-2 justify-end">
        <button className="bg-red-600 p-2 rounded-md text-white text-lg hover:opacity-90 transition-opacity">
          Descargar PDF
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

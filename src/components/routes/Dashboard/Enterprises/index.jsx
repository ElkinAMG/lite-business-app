import { Link, Outlet } from "react-router-dom";

export default function Enterprises() {
  return (
    <main className="w-screen p-10">
      <h1 className="text-center text-4xl text-blue-700 font-semibold">Empresas</h1>
      <div className="text-end mt-5">
        <Link to="create">
          <button className="bg-blue-700 p-2 rounded-md text-white text-lg hover:opacity-90 transition-opacity">
            Crear Empresa
          </button>
        </Link>
      </div>
      <Outlet />
    </main>
  );
}

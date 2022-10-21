import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <div id="view" className="h-full w-screen flex flex-row">
        {/* SIDEBAR START */}
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              Lt<span className="text-red-400">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Lite<span className="text-blue-700">'</span>s
              <span className="text-blue-700">.</span>
            </h1>
            <div id="profile" className="space-y-3">
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-blue-600">
                  Bienvenido de vuelta,
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  Administrador
                </p>
              </div>
            </div>

            {/* MENU */}
            <div id="menu" className="flex flex-col space-y-2">
              <Link
                to="enterprises"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-700 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">Empresas</span>
              </Link>

              {/* <Link
                to="inventory"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-700 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>
                <span className="">Inventario</span>
              </Link> */}

              <span className="text-sm cursor-pointer bg-red-600 font-medium text-gray-700 py-2 px-2 hover:scale-105 rounded-md transition duration-150 ease-in-out hover:opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-none inline-block"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="arcs"
                >
                  <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                </svg>
                <span className="text-white">Cerrar sesión</span>
              </span>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

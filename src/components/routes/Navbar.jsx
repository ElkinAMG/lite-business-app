import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-gray-200 px-2 py-3 mb-10 border-b-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex">
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            Lite<span className="text-blue-400">'</span>s Businesses
            <span className="text-red-400">.</span>
          </span>
        </Link>

        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                href="/"
                className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className="text-gray-700 hover:bg-gray-50 border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                <svg
                  className="mr-1 m-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="arcs"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

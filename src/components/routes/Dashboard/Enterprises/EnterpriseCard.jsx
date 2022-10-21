import { Link } from "react-router-dom";

export default function EnterprisesCard({ enterprise }) {
  return (
    <div className="my-2 cursor-pointer rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-700 duration-300 hover:-translate-y-1">
      <Link to={`/dashboard/inventory/${enterprise?.NIT}`}>
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

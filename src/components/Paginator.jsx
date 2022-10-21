export default function Paginator({ pages, onPageChange }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px">
        {Array(pages)?.map((page) => (
          <li key={page}>
            <span
              onClick={() => onPageChange(page)}
              className="bg-white border border-gray-300 text-grey-400 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3"
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

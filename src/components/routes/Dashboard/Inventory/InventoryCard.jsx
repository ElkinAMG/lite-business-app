export default function InventoryCard({ product }) {
  return (
    <div className="my-2 cursor-pointer rounded shadow-lg shadow-gray-200 bg-white duration-300 hover:-translate-y-1">
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
          <p className="leading-5 text-gray-500 ">{product?.description || "No disponible"}</p>
        </figcaption>
      </figure>
    </div>
  );
}

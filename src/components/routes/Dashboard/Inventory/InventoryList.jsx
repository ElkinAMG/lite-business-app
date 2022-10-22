import { useParams } from "react-router-dom";
import { GetInventoryByUser } from "../../../../context/api/inventory";
import usePaginator from "../../../../hooks/usePaginator";
import EmptyData from "../../../EmptyData";

import Paginator from "../../../Paginator";
import InventoryCard from "./InventoryCard";

export default function InventoryList() {
  const { id } = useParams();
  const { items, pages, onPageChange, reloadPage } = usePaginator(
    GetInventoryByUser,
    id
  );

  return (
    <>
      <div className="grid mt-5 p-3 border-red-300 grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0 ? (
          items?.map((product) => (
            <InventoryCard
              reloadPage={reloadPage}
              key={product?.SKU}
              product={product}
            />
          ))
        ) : (
          <EmptyData />
        )}
      </div>
      <Paginator pages={pages} onPageChange={onPageChange} />
    </>
  );
}

import { GetEnterprises } from "../../../../context/api/enterprises";
import usePaginator from "../../../../hooks/usePaginator";

import Paginator from "../../../Paginator";
import EnterprisesCard from "./EnterpriseCard";

export default function EnterprisesList({ itemsRedirect = true }) {
  const { items, pages, onPageChange } = usePaginator(GetEnterprises);
  return (
    <>
      <div className="grid mt-5 p-3 border-red-300 grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items?.map((enterprise) => (
          <EnterprisesCard itemRedirect={itemsRedirect} key={enterprise?.NIT} enterprise={enterprise} />
        ))}
      </div>
      <Paginator pages={pages} onPageChange={onPageChange} />
    </>
  );
}

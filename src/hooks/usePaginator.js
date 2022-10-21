import { useCallback, useEffect, useState } from "react";

/**
 *
 * @param {Promise} api is the function caller for api endpoint that receives page
 */

export default function usePaginator(api, ...args) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const onPageChange = (selectedPage) => setPage(selectedPage);

  const changeData = useCallback(async () => {
    const { items, pages } = await api(page, ...args);
    console.log("hola");
    setItems(items);
    setPages(pages);
  }, [page, api]);

  useEffect(() => {
    changeData();
  }, [changeData]);

  return { items, page, pages, onPageChange };
}

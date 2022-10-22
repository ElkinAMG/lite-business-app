import { useState, useEffect } from "react";

export default function useFecth(api, ...args) {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      const data = await api(...args);
      setLoader(false);
      setData(data);
    };

    callApi();
    // eslint-disable-next-line
  }, []);

  return { data, isLoading };
}

import { useEffect, useState } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useData called");
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    console.log("isLoading set to true");
    fetch(endpoint, { signal })
      .then((res) => {
        // Check if the response status is in the 200 range (success status)
        if (res.ok) {
          // res.json stills gives us a promise, so we need to chain another then()
          return res.json();
        } else {
          // Reject the promise with the status code
          throw new Error(`HTTP error, Status: ${res.status}`);
        }
      })
      .then((result) => {
        setData(result);
        setLoading(false);
        console.log("isLoading set to false");
      })
      .catch((error) => {
        const message = "There was an error fetching data: " + error;
        setError(message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;

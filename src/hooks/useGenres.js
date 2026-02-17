import { useEffect, useState } from "react";
import { getGenres } from "../services/genresService";

export const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getGenres();

        if (isMounted) setGenres(data);
      } catch (err) {
        if (isMounted) setError(err?.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { genres, loading, error };
};

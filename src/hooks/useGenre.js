import { useEffect, useState } from "react";
import { getGenreBySlug } from "../services/genresService";

export const useGenre = (slug) => {
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getGenreBySlug(slug);

        if (isMounted) setGenre(data || null);
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
  }, [slug]);

  return { genre, loading, error };
};

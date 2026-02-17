import { GENRES } from "../data/genres";

const USE_API = import.meta.env.VITE_USE_API === "true";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const getGenres = async () => {
  if (!USE_API) {
    await sleep(200);
    return GENRES || [];
  }

  const res = await fetch(`${API_BASE_URL}/genres`);

  if (!res.ok) {
    throw new Error(`Failed to fetch genres (${res.status})`);
  }

  return res.json();
};

export const getGenreBySlug = async (slug) => {
  if (!USE_API) {
    await sleep(200);

    const genre = GENRES.find((g) => g.slug === slug);
    return genre || null; // ← explicit null if not found
  }

  const res = await fetch(`${API_BASE_URL}/genres/${slug}`);

  if (res.status === 404) {
    return null; // ← backend 404 should behave like mock mode
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch genre (${res.status})`);
  }

  return res.json();
};

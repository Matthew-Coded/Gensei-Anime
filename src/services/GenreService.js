import { GENRES } from "../data/genres";

// Later when backend is ready
const USE_API = false;

// Later: put my backend base URL in .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getGenres = async () => {
  if (!USE_API) {
    // Simulate network to make sure UI loads correctly
    await new Promise((res) => setTimeout(res, 200));
    return GENRES;
  }

  // API version ready for later
  const res = await fetch(`${API_BASE_URL}/genres`);

  if (!res.ok) {
    throw new Error(`Failed to fetch genres (${res.status})`);
  }

  return res.json();
};

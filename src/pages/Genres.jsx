import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookDashed, Search, Tags } from "lucide-react";
import { useGenres } from "../hooks/useGenres";
import GenreCard from "../components/GenreCard";

const Genres = () => {
  const { genres, loading, error } = useGenres();

  const [query, setQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("All");

  const themes = useMemo(() => {
    const set = new Set();
    genres.forEach((g) => (g.commonThemes || []).forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [genres]);

  const filteredGenres = useMemo(() => {
    const q = query.trim().toLowerCase();

    return genres.filter((g) => {
      const matchesQuery =
        !q ||
        g.name?.toLowerCase().includes(q) ||
        g.description?.toLowerCase().includes(q) ||
        (g.popularAnime || []).some((a) => a.toLowerCase().includes(q)) ||
        (g.commonThemes || []).some((t) => t.toLowerCase().includes(q));

      const matchesTheme =
        activeTheme === "All" || (g.commonThemes || []).includes(activeTheme);

      return matchesQuery && matchesTheme;
    });
  }, [genres, query, activeTheme]);

  const handleView = (genre) => {
    // will use navigate(`/genres/${genre.slug}`) when adding routes
    console.log("View genre:", genre);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden pt-24 pb-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-5">
            <BookDashed className="w-7 h-7 text-blue-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Explore Anime
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Genres
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Search, filter by themes, and find a genre that matches your vibe.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 mb-8">
          <div className="flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400/40 transition">
            <Search className="w-5 h-5 text-blue-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search genres, themes, or anime..."
              className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
            />
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
              <Tags className="w-4 h-4 text-blue-400" />
              <span className="font-semibold">Filter by Theme</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {themes.map((t) => {
                const isActive = t === activeTheme;

                return (
                  <button
                    key={t}
                    onClick={() => setActiveTheme(t)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-slate-800/40 border-white/10 text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="text-center text-gray-400">Loading genres...</div>
        )}

        {error && (
          <div className="text-center text-red-300">
            {error}{" "}
            <span className="text-gray-400">
              (When your API is ready, this will help debug fetch issues.)
            </span>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex items-center justify-between mb-5">
              <p className="text-gray-400 text-sm">
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredGenres.length}
                </span>{" "}
                genre{filteredGenres.length === 1 ? "" : "s"}
              </p>

              <Link
                to="/"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredGenres.map((g) => (
                <GenreCard key={g.slug || g.name} genre={g} onView={handleView} />
              ))}
            </div>

            {filteredGenres.length === 0 && (
              <div className="mt-10 text-center text-gray-400">
                No matches. Try a different search or theme filter.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Genres;

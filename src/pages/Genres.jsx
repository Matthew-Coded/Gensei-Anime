import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useGenres } from "../hooks/useGenres";



const Genres = () => {
  const [search, setSearch] = useState("");

  const [selectedTheme, setSelectedTheme] = useState("All");

  const { genres, loading, error } = useGenres();



  const themeOptions = useMemo(() => {
    const themeSet = new Set();
    genres.forEach((g) => {
      (g.commonThemes || []).forEach((t) => themeSet.add(t));
    });
    return ["All", ...Array.from(themeSet).sort()];
  }, [genres]);

  // Filter genres by search and theme
  const filteredGenres = useMemo(() => {
    const q = search.trim().toLowerCase();

    return genres.filter((g) => {
      const matchesSearch =
        !q ||
        g.name?.toLowerCase().includes(q) ||
        g.description?.toLowerCase().includes(q);

      const matchesTheme =
        selectedTheme === "All" ||
        (g.commonThemes || []).includes(selectedTheme);

      return matchesSearch && matchesTheme;
    });
  }, [genres, search, selectedTheme]);

  return (
    <main className="py-16 sm:py-20 px-6 sm:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Browse Genres
            </span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore categories and jump into a vibe. Click any genre to see full
            details.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          {/* Search */}
          <div className="w-full md:max-w-md">
            <label className="block text-sm text-gray-300 mb-2">Search</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search genres (e.g., adventure, comedy)..."
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* Theme filter */}
          <div className="w-full md:w-64">
            <label className="block text-sm text-gray-300 mb-2">
              Filter by Theme
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              {themeOptions.map((t) => (
                <option key={t} value={t} className="bg-slate-950">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="text-center text-gray-400 py-16">
            Loading genres...
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-red-400 font-semibold mb-2">Error</p>
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            {filteredGenres.length === 0 ? (
              <div className="text-center text-gray-400 py-16">
                No genres matched your filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGenres.map((g) => (
                  <Link
                    key={g.id}
                    to={`/genres/${g.slug}`}
                    className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900/70 hover:border-white/20"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

                    <h2 className="text-2xl font-bold mb-2">{g.name}</h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {g.description}
                    </p>

                    {/* Themes pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(g.commonThemes || []).slice(0, 5).map((theme) => (
                        <span
                          key={theme}
                          className="text-xs bg-slate-800/80 border border-white/10 px-3 py-1 rounded-full text-gray-200"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        Popular:{" "}
                        <span className="text-gray-200">
                          {(g.popularAnime || []).slice(0, 1)[0] || "—"}
                        </span>
                      </span>
                      <span className="text-blue-400 group-hover:text-blue-300 font-semibold">
                        View →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* Footer link back home (optional) */}
        <div className="mt-12 text-center">
          <Link to="/" className="text-gray-400 hover:text-gray-200">
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Genres;

import { Link, useParams } from "react-router-dom";
import { BookDashed, LineSquiggle } from "lucide-react";
import { GENRES } from "../data/genres";

const GenreDetails = () => {
  const { slug } = useParams();

  const genre = GENRES.find((g) => g.slug === slug);

  // Simple “not found” state
  if (!genre) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pt-24 px-6 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Genre not found</h1>
          <p className="text-gray-400 mb-6">
            That genre doesn’t exist yet. Go back to Genres.
          </p>
          <Link
            to="/genres"
            className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
          >
            Back to Genres
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden pt-24 pb-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-5">
            <BookDashed className="w-7 h-7 text-blue-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              {genre.name}
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg">
            {genre.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/genres"
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Back to Genres
            </Link>

            <Link
              to="/"
              className="px-5 py-2 bg-blue-500/10 border border-blue-400/20 rounded-lg font-semibold text-sm hover:bg-blue-500/15 transition-all text-blue-200"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Themes */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Common Themes</h2>
            <div className="flex flex-wrap gap-2">
              {genre.commonThemes.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-slate-800/60 border border-white/10 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Characteristics */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Characteristics</h2>
            <ul className="space-y-3">
              {genre.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <LineSquiggle className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-300">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Anime */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Popular Anime</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {genre.popularAnime.map((a) => (
                <div
                  key={a}
                  className="bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="w-full sm:w-auto px-7 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreDetails;

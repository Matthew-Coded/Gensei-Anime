import { LineSquiggle } from "lucide-react";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-2xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {genre.name}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {genre.description}
            </p>
          </div>

          <Link
            to={`/genres/${genre.slug}`}
            className="shrink-0 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
          >
            View
          </Link>
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold mb-2 text-gray-200">Themes</p>
          <div className="flex flex-wrap gap-2">
            {genre.commonThemes?.map((t) => (
              <span
                key={t}
                className="text-xs bg-slate-800/60 border border-white/10 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p className="text-sm font-semibold mb-2 text-gray-200">
              Characteristics
            </p>
            <ul className="space-y-2">
              {(genre.characteristics || []).slice(0, 4).map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <LineSquiggle className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2 text-gray-200">
              Popular Anime
            </p>
            <ul className="space-y-2">
              {(genre.popularAnime || []).slice(0, 4).map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <LineSquiggle className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all">
            Get Started
          </button>

          <button className="w-full sm:w-auto px-6 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl font-semibold text-sm hover:bg-blue-500/15 transition-all text-blue-200">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;

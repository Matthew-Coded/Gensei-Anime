import { Link, useParams } from "react-router-dom";
import { BookDashed, LineSquiggle } from "lucide-react";
import { useGenre } from "../hooks/useGenre";

const GenreDetails = () => {
  const { slug } = useParams();
  const { genre, loading, error } = useGenre(slug);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-300">Loading genre...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-red-300">{error}</p>
        <p className="text-sm text-gray-400 mt-2">
          (When your API is ready, this helps debug fetch issues.)
        </p>
        <div className="mt-6">
          <Link className="underline text-gray-200" to="/genres">
            Back to Genres
          </Link>
        </div>
      </div>
    );
  }

  if (!genre) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Genre not found</h1>
        <p className="text-gray-300 mt-2">
          That genre doesn’t exist yet. Go back to Genres.
        </p>
        <div className="mt-6">
          <Link className="underline text-gray-200" to="/genres">
            Back to Genres
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold">{genre.name}</h1>
          <p className="text-gray-300 mt-3">{genre.description}</p>

          <div className="flex gap-4 mt-6">
            <Link className="underline text-gray-200" to="/genres">
              Back to Genres
            </Link>
            <Link className="underline text-gray-200" to="/">
              Home
            </Link>
          </div>
        </div>

        <div className="flex gap-2 text-gray-300">
          <BookDashed />
          <LineSquiggle />
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-10">
        {/* Themes */}
        <section>
          <h2 className="text-2xl font-semibold">Common Themes</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {(genre.commonThemes || []).map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-800/40 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Characteristics */}
        <section>
          <h2 className="text-2xl font-semibold">Characteristics</h2>
          <ul className="list-disc list-inside mt-4 text-gray-200 space-y-2">
            {(genre.characteristics || []).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Popular Anime */}
        <section>
          <h2 className="text-2xl font-semibold">Popular Anime</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {(genre.popularAnime || []).map((a) => (
              <div
                key={a}
                className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-gray-200"
              >
                {a}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GenreDetails;

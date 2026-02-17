import { BookDashed, LineSquiggle } from "lucide-react";
import { Link } from "react-router-dom";

const Genre = () => {
  const genre = [
    {
      name: "Adventure",
      description:
        "Adventure anime focuses on journeys, exploration, and personal growth. Characters travel through new worlds, face powerful enemies, and overcome challenges that shape who they become.",

      characteristics: [
        "Exploration of new lands or worlds",
        "Quests and missions",
        "Dangerous obstacles",
        "Strong friendships formed through hardship",
        "Character growth through struggle",
      ],

      commonThemes: [
        "Freedom",
        "Discovery",
        "Courage",
        "Perseverance",
        "Teamwork",
      ],

      popularAnime: [
        "One Piece",
        "Hunter x Hunter",
        "Fullmetal Alchemist: Brotherhood",
        "Made in Abyss",
        "Magi: The Labyrinth of Magic",
      ],
    },

    {
      name: "Comedy",
      description:
        "Comedy anime focuses on humor, absurd situations, exaggerated personalities, and light-hearted storytelling. These series aim to entertain through witty dialogue, parody, misunderstandings, and over-the-top reactions.",

      characteristics: [
        "Exaggerated facial expressions and reactions",
        "Ridiculous or unexpected situations",
        "Fast-paced jokes and punchlines",
        "Parody or satire of common tropes",
        "Comedic misunderstandings",
      ],

      commonThemes: [
        "Friendship",
        "Everyday chaos",
        "Embarrassment",
        "Irony",
        "Lighthearted conflict",
      ],

      popularAnime: [
        "Gintama",
        "KonoSuba",
        "The Disastrous Life of Saiki K.",
        "Nichijou",
        "One Punch Man",
      ],
    },

    {
      name: "Shonen",
      description:
        "Shonen anime focuses on action-driven stories, intense rivalries, personal growth, and the pursuit of becoming stronger. These series often feature determined protagonists who overcome obstacles through hard work, friendship, and perseverance.",

      characteristics: [
        "High-energy battles and fight scenes",
        "Training arcs and power progression",
        "Strong rival characters",
        "Team-based dynamics",
        "Clear goals or long-term dreams",
      ],

      commonThemes: [
        "Never giving up",
        "Friendship and loyalty",
        "Self-improvement",
        "Honor",
        "Overcoming limits",
      ],

      popularAnime: [
        "Naruto",
        "Dragon Ball Z",
        "My Hero Academia",
        "Demon Slayer",
        "Jujutsu Kaisen",
      ],
    },
  ];

  return (
    <section
      id="genre"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Fun and Great
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Genre Choices
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the world that fits your vibe! Choose the perfect genre for
            your anime experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {genre.map((g, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"></div>
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{g.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {g.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Themes:</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {g.commonThemes.map((theme, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-800 px-3 py-1 rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {g.popularAnime.map((popular, popularKey) => (
                  <li
                    key={popularKey}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <LineSquiggle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {popular}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-xl">
            Want more Genres?{" "}
            <Link to="/genres" className="text-blue-400 hover:text-blue-300">
              Click Here!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Genre;

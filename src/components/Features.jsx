import frieren from "../data/Popular/Frieren.avif";

const Features = () => {
  const features = [
    {
      title: "Popular",
      description:
        "Watch from a list of highly rated anime where any you chose you'll bound to be hooked!",
      image: frieren,
      imagePosition: "left",
    },

    {
      title: "New",
      description:
        "Watch from a list of highly rated anime where any you chose you'll bound to be hooked!",
      image: frieren,
      imagePosition: "right",
    },

    {
      title: "This Season",
      description:
        "Watch from a list of highly rated anime where any you chose you'll bound to be hooked!",
      image: frieren,
      imagePosition: "left",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your guide to your next adventure!
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Journeys await!
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-grow items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300">
                    {/* Ide Interface */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                            <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                              {feature.title}
                            </span>
                          </div>
                          <div>
                            <div className="mt-3 sm:mt-4">
                              <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-32 sm:w-28 h-auto relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/40"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* text section */}
                  <div>yeah</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

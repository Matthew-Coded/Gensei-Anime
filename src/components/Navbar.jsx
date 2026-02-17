import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center space-x-1 group cursor-pointer"
          >
            <div>
              <img
                src="/logo.png"
                alt="GenseiAnime"
                className="w-10 h-10 sm:w-14 sm:h-14"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Gensei</span>
              <span className="text-blue-400">Anime</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </Link>

            <Link
              to="/genres"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Genre
            </Link>

            <Link
              to="/login"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Login
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X />
            ) : (
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <Link
              to="/#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </Link>

            <Link
              to="/genres"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Genre
            </Link>

            <Link
              to="/login"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

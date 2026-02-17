import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      window.scrollBy({ top: -90, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;

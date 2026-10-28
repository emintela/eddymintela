import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sections = {
  "/": "home",
  "/about": "about",
  "/project": "projects",
  "/resume": "resume",
};

function ScrollToSection({ load }) {
  const { pathname, key } = useLocation();
  useEffect(() => {
    // The preloader locks scrolling, so wait until it's gone
    if (load) return;
    const id = sections[pathname];
    const el = id && document.getElementById(id);
    if (el && pathname !== "/") {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, key, load]);
  return null;
}

export default ScrollToSection;

import { useEffect } from "react";

import { HomePage } from "../pages/HomePage";
import { scrollToSection, sectionRoutes } from "./sectionRoutes";

export function App() {
  useEffect(() => {
    const scrollCurrentRoute = (behavior: ScrollBehavior = "auto") => {
      scrollToSection(window.location.pathname, behavior);
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }

      const url = new URL(link.href);

      if (url.origin !== window.location.origin || !(url.pathname in sectionRoutes)) {
        return;
      }

      event.preventDefault();

      if (window.location.pathname !== url.pathname) {
        window.history.pushState(null, "", url.pathname);
      }

      scrollToSection(url.pathname);
    };

    const handlePopState = () => scrollCurrentRoute();

    scrollCurrentRoute();
    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return <HomePage />;
}

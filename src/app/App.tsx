import { useEffect, useState } from "react";

import { HomePage } from "../pages/HomePage";
import { ImplantDentalPage } from "../pages/ImplantDentalPage";
import { scrollToSection, sectionRoutes } from "./sectionRoutes";

const implantDentalPath = "/tratamentos/implante-dentario";

const pageSeo = {
  home: {
    title:
      "Dra. Miriam Aguiar Odontologia | Dentista nos Ingleses, Florianópolis",
    description:
      "Clínica odontológica nos Ingleses, Florianópolis. Implantes dentários, Invisalign, clareamento, facetas, canal, próteses e atendimento acolhedor com a Dra. Miriam Aguiar.",
    url: "https://dentistadramiriamaguiar.com/",
  },
  implant: {
    title:
      "Implante Dentário em Florianópolis nos Ingleses | Dra. Miriam Aguiar",
    description:
      "Agende sua avaliação para implante dentário nos Ingleses, Florianópolis. Recupere mastigação, estética e confiança com planejamento e atendimento acolhedor.",
    url: "https://dentistadramiriamaguiar.com/tratamentos/implante-dentario",
  },
};

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function updateMetaSelector(selector: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
}

function updateSeo(pathname: string) {
  const seo = pathname === implantDentalPath ? pageSeo.implant : pageSeo.home;

  document.title = seo.title;
  updateMetaSelector('meta[name="description"]', seo.description);
  updateMetaSelector('meta[property="og:title"]', seo.title);
  updateMetaSelector('meta[property="og:description"]', seo.description);
  updateMetaSelector('meta[property="og:url"]', seo.url);
  updateMetaSelector('meta[name="twitter:title"]', seo.title);
  updateMetaSelector('meta[name="twitter:description"]', seo.description);
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute(
    "href",
    seo.url,
  );
}

function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = decodeURIComponent(hash.replace("#", ""));

  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior,
    block: "start",
  });
}

export function App() {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }

      const url = new URL(link.href);

      const pathname = url.pathname.length > 1 && url.pathname.endsWith("/")
        ? url.pathname.slice(0, -1)
        : url.pathname;

      if (
        url.origin !== window.location.origin ||
        (!(pathname in sectionRoutes) && pathname !== implantDentalPath)
      ) {
        return;
      }

      event.preventDefault();

      if (pathname === implantDentalPath && url.hash) {
        window.history.pushState(null, "", `${pathname}${url.hash}`);
        setPathname(pathname);
        scrollToHash(url.hash);
        return;
      }

      if (window.location.pathname !== pathname || window.location.hash) {
        window.history.pushState(null, "", pathname);
      }

      setPathname(pathname);
    };

    const handlePopState = () => {
      const nextPathname = normalizePathname(window.location.pathname);

      setPathname(nextPathname);

      if (nextPathname === implantDentalPath) {
        window.requestAnimationFrame(() => {
          scrollToHash(window.location.hash, "auto");
        });
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    updateSeo(pathname);

    if (pathname === implantDentalPath) {
      scrollToHash(window.location.hash, "auto");
      return;
    }

    scrollToSection(pathname, "auto");
  }, [pathname]);

  if (pathname === implantDentalPath) {
    return <ImplantDentalPage />;
  }

  return <HomePage />;
}

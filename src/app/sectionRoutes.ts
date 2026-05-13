export const sectionRoutes: Record<string, string> = {
  "/": "inicio",
  "/inicio": "inicio",
  "/sobre": "sobre",
  "/tratamentos": "tratamentos",
  "/equipe": "equipe",
  "/diferenciais": "diferenciais",
  "/contato": "contato",
  "/localizacao": "localizacao",
};

export function scrollToSection(
  pathname: string,
  behavior: ScrollBehavior = "smooth",
) {
  const sectionId = sectionRoutes[pathname];

  if (!sectionId) {
    return false;
  }

  if (sectionId === "inicio") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  document.getElementById(sectionId)?.scrollIntoView({
    behavior,
    block: "start",
  });

  return true;
}

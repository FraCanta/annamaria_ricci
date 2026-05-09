export const SEO_TITLE_PREFIX =
  "Anna Maria Ricci | Career Strategist | Orientatrice Olistica";

export function buildSeoTitle(pageTitle) {
  return `${SEO_TITLE_PREFIX} | ${pageTitle}`;
}

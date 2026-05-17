const WORDPRESS_IMAGE_HOST = "blogannamaria.annamariaricci.eu";

export function getPostImageUrl(sourceUrl, width = 1200) {
  if (!sourceUrl) return "";

  try {
    const url = new URL(sourceUrl);

    if (url.hostname === "i0.wp.com") {
      url.searchParams.set("resize", `${width},${width}`);
      url.searchParams.set("ssl", "1");
      return url.toString();
    }

    if (url.hostname === WORDPRESS_IMAGE_HOST) {
      return `https://i0.wp.com/${url.hostname}${url.pathname}?resize=${width},${width}&ssl=1`;
    }
  } catch {
    return sourceUrl;
  }

  return sourceUrl;
}

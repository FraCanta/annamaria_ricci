export const SEO_TITLE_PREFIX =
  "Anna Maria Ricci | Career Strategist | Orientatrice Olistica";

export const SITE_URL = "https://www.annamariaricci.eu";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/annamaria_cover.png`;

export const pageSeo = {
  home: {
    title: "Home",
    description:
      "Consulenze di orientamento professionale, career counseling, bilancio di competenze e percorsi di evoluzione personale con Anna Maria Ricci.",
    path: "/",
  },
  about: {
    title: "Chi sono",
    description:
      "Scopri il percorso di Anna Maria Ricci, orientatrice professionale, counselor, rebirther e facilitatrice di respiro circolare consapevole.",
    path: "/chi-sono",
  },
  tools: {
    title: "I miei strumenti",
    description:
      "Strumenti di orientamento, counseling, mindfulness, respiro circolare e pratiche creative per accompagnare cambiamento e crescita professionale.",
    path: "/i-miei-strumenti",
  },
  paths: {
    title: "Tutti i percorsi",
    description:
      "Percorsi individuali e organizzativi per orientamento professionale, cambiamento lavorativo, libera professione, radici familiari e crescita.",
    path: "/tutti-i-percorsi",
  },
  breathing: {
    title: "Il Respiro Circolare Consapevole",
    description:
      "Un percorso di respiro circolare consapevole per sciogliere blocchi, ritrovare presenza e sostenere trasformazione personale e professionale.",
    path: "/respiro-circolare-consapevole",
  },
  blog: {
    title: "Blog",
    description:
      "Articoli e riflessioni su orientamento, lavoro, counseling, consapevolezza, cambiamento professionale e crescita personale.",
    path: "/blog",
  },
  contact: {
    title: "Contatti",
    description:
      "Contatta Anna Maria Ricci per consulenze, percorsi di orientamento professionale, counseling e collaborazioni formative.",
    path: "/contatti",
  },
  booking: {
    title: "Prenota la tua consulenza",
    description:
      "Prenota una consulenza con Anna Maria Ricci per fare chiarezza su lavoro, cambiamento, obiettivi professionali e percorsi personali.",
    path: "/prenota-la-tua-consulenza",
  },
};

export function buildSeoTitle(pageTitle) {
  return `${SEO_TITLE_PREFIX} | ${pageTitle}`;
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function buildWebPageSchema({ title, description, path }) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function buildBaseSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Anna Maria Ricci",
      inLanguage: "it-IT",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": ["Person", "ProfessionalService"],
      "@id": `${SITE_URL}/#person`,
      name: "Anna Maria Ricci",
      url: SITE_URL,
      image: DEFAULT_OG_IMAGE,
      jobTitle: [
        "Career Strategist",
        "Orientatrice professionale",
        "Professional Counselor",
        "Facilitatrice di Respiro Circolare Consapevole",
      ],
      description:
        "Anna Maria Ricci offre consulenze e percorsi di orientamento professionale, counseling, bilancio di competenze, respiro circolare consapevole e crescita personale.",
      areaServed: ["Italia", "Toscana", "Pisa", "Pistoia", "Prato"],
      email: "welcome@annamariaricci.eu",
      telephone: "+39 351 599 1968",
      sameAs: [
        "https://www.facebook.com/annamariaricciofficial",
        "https://www.instagram.com/lariccigiontella/",
        "https://www.linkedin.com/in/annamariaricci/",
      ],
    },
  ];
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({ name, description, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: stripHtml(name),
    description: stripHtml(description),
    url: absoluteUrl(path),
    image: image?.startsWith("http") ? image : absoluteUrl(image),
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: ["Italia", "Toscana"],
    serviceType: "Orientamento professionale e counseling",
  };
}

export function buildArticleSchema({ post, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: stripHtml(post.title),
    description: stripHtml(post.excerpt),
    image,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}

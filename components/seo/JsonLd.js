export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data.filter(Boolean) : [data].filter(Boolean);

  if (!items.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(items.length === 1 ? items[0] : items),
      }}
    />
  );
}

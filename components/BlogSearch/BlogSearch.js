import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function BlogSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const debounceTimeout = useRef(null);
  const lastQuery = useRef("");

  useEffect(() => {
    setSearch(router.query.search || "");
  }, [router.query.search]);

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      if (lastQuery.current !== "") {
        router.push("/blog", undefined, { shallow: true });
        lastQuery.current = "";
      }
      return;
    }

    if (search === lastQuery.current) return;
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search-posts?q=${encodeURIComponent(search)}&lang=${
            router.locale || "it"
          }`
        );
        const json = await res.json();
        setResults(json.posts || []);
        lastQuery.current = search;
        router.push({ pathname: "/blog", query: { search } }, undefined, {
          shallow: true,
        });
      } catch (error) {
        console.error("Search API error:", error);
      }
    }, 200);

    return () => clearTimeout(debounceTimeout.current);
  }, [search, router]);

  const handleReset = () => {
    setSearch("");
    setResults([]);
    lastQuery.current = "";
    router.push("/blog", undefined, { shallow: true });
  };

  return (
    <div className="relative w-full lg:max-w-4xl">
      {/* FORM */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center w-full bg-transparent border rounded-md border-gray100"
      >
        {/* icona */}
        <div className="pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 24 24"
          >
            <path
              fill="#1e211e"
              fillRule="evenodd"
              d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={isFocused || search ? "" : "Search"}
          className="flex-1 p-3 text-base uppercase bg-transparent outline-none text-gray100 placeholder:text-gray100"
        />

        {search && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-2 py-2 text-sm border-l lg:px-4 border-gray100 text-gray100 hover:text-gray100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#1e211e"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
              >
                <path d="M14.5 3.5c2.414 1.377 4 4.022 4 7a8 8 0 1 1-8-8" />
                <path d="M14.5 7.5v-4h4" />
              </g>
            </svg>
            RESET
          </button>
        )}
      </form>

      {/* RISULTATI */}
      {isFocused && results.length > 0 && (
        <ul
          className="absolute left-0 top-full w-full mt-1 max-h-72 overflow-y-auto
            bg-white bg-opacity-95 shadow-lg rounded-b-md
            text-gray100 border border-gray100 z-[9999]"
        >
          {results.map((post) => (
            <li
              key={post.id}
              className="flex gap-3 p-3 border-b cursor-pointer border-gray100 hover:bg-gray50"
              onMouseDown={() => router.push(`/posts/${post.slug}`)}
            >
              {post.featuredImage?.node?.sourceUrl && (
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div className="flex flex-col">
                <h3
                  className="font-semibold text-sm text-gray900"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <p
                  className="text-xs text-gray600 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Links from "./Links";
function Search() {
  // const [setSearchTerm] = useStateContext()
  const [text, setText] = useState("Türkiye");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google or type URL 🔎"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2cl text gray-500"
          onClick={() => setText("")}
        ></button>
      )}
      <Links />
    </div>
  );
}

export default Search;

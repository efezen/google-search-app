import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com/search";

export function StateContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      headers: {
        "X-RapidAPI-Key": "API_KEY",
        "X-RapidAPI-Host": "API_HOST",
      },
    });
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };
  return (
    <StateContextProvider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
        {children}

    </StateContextProvider>
  )
}

export const useStateContext = () => useContext(StateContext);

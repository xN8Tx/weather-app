import React, { useState } from "react";

import SearchContext from "./searchContext";

export default function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

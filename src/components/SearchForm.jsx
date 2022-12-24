import React from "react";
import InputWithLabel from "./InputWithLabel";


export function SearchForm({ handleSearchSubmit, query, handleSearchInput }) {
  return (
    <form onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={query}
        onChange={handleSearchInput}
        isFocus
      >
        Search:{" "}
      </InputWithLabel>

      <button type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
}

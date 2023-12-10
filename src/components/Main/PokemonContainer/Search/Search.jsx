import React, { useContext, useState } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(event.target.value);
    onSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPokemon(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Search for a pokemon to add it to your list</p>
        <input type="text" placeholder="Write a pokemon name" value={inputValue} onChange={handleChange} />
        <br />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
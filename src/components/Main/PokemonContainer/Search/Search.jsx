import React, { useContext, useState } from "react";

const Search = ({ addPokemon }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPokemon(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <br />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
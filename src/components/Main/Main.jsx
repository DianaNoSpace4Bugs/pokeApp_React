import React from "react";
import Search from "./PokemonContainer/Search/Search";
import ListaPokemon from "./PokemonContainer/ListaPokemon/ListaPokemon";


const Main = () => {
  return (
    <>
      <main>
        <Search />
        <ListaPokemon/>
      </main>
    </>
  );
};

export default Main;

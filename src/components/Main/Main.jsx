import React from "react";
import PokemonContainer from "./PokemonContainer/PokemonContainer";

const Main = ({ pokemonData, setPokemonData }) => {
  return (
    <>
      <main>
        <PokemonContainer pokemonData={pokemonData} setPokemonData={setPokemonData} />
      </main>
    </>
  );
};

export default Main;

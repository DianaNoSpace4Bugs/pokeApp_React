import React, { useContext, useState } from "react";
import Card from "./Card/Card";
import { v4 as uuidv4 } from 'uuid';

const ListaPokemon = ({ pokemonData }) => {
  function showPokemonCards() {
    // console.log('showPokemonCards', pokemonData)
    // console.log('showPokemonCards', pokemonData.count)
    // console.log('showPokemonCards', pokemonData.results)
    return pokemonData?.map((data) => (
      <Card key={uuidv4()} pokemon={data} />
    ));
  }

  return (
    <>
      {showPokemonCards()}
    </>);
};

export default ListaPokemon;

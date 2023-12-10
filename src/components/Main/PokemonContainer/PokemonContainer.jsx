// En el componente PokemonContainer
import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import axios from 'axios';
import { pokemonContext } from '../../../context/pokemonContext';

const PokemonContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const addPokemon = (pokemon) => {
    if (!pokemon) return;
    pokemon = pokemon.trim().toLowerCase();
    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}`)
      .then(response => {
        const dataInfo = response.data;
        const pokemonFound = {
          name: dataInfo.pokemon.name,
          url: dataInfo.sprites.front_default
        };
        setPokemonData([...pokemonData, pokemonFound]);
      })
      .catch(error => {
        console.error('The pokemon you try to search does not exists: ', error);
      });
  };

  // Función de debouncing para la búsqueda de Pokémon
  const debouncedAddPokemon = (pokemon) => {
    const timerId = setTimeout(() => {
      addPokemon(pokemon);
    }, 1500);

    return () => clearTimeout(timerId);
  };

  return (
    <>
      <pokemonContext.Provider value={pokemonData}>
        <div>
          {/* Pasa la función de búsqueda debounced al componente Search */}
          <Search onSearch={debouncedAddPokemon} />
          <ListaPokemon pokemonData={pokemonData} />
        </div>
      </pokemonContext.Provider>
    </>
  );
};

export default PokemonContainer;

import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import axios from 'axios'
import { pokemonContext } from '../../../context/pokemonContext'

const PokemonContainer = () => {

  const [pokemonData, setPokemonData] = useState([])

  const addPokemon = (pokemon) => {
    if (!pokemon) return;
    pokemon = pokemon.trim().toLowerCase();
    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}`)
      .then(response => {
        console.log(response)
        const dataInfo = response.data
        const pokemonFound = {
          name: dataInfo.pokemon.name,
          url: dataInfo.sprites.front_default
        };
        console.log(pokemonFound)
        // Falta evitar que los pokemon estén duplicados.
        setPokemonData([...pokemonData, pokemonFound]);
      })
      .catch(error => {
        console.error('The pokemon you try to search does not exists: ', error);
      });
  }

  // function cargarPokemonData({ searchValue } = {}) {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${searchValue ?? ''}?limit=10`;
  //   axios.get(url)
  //     .then(response => {
  //       setPokemonData(response.data.results);
  //     })
  //     .catch(error => {
  //       console.error('Error trying to get Pokemon data', error);
  //     });
  // }

  useEffect(() => {
    // cargarPokemonData();
  }, []);

  return (
    <>
      <pokemonContext.Provider value={pokemonData}>
        <div>
          <Search addPokemon={addPokemon} />
          <ListaPokemon pokemonData={pokemonData} />
        </div>
      </pokemonContext.Provider>
    </>
  )
};

export default PokemonContainer;
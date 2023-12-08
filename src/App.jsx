import React, { useEffect, useState } from 'react';
import Pokemon from './Components/Pokemon';


const PokemonList = () => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150';
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Obtener detalles para cada Pokémon en la lista
        const promises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        });

        const detailedPokemonData = await Promise.all(promises);
        setPokemonList(detailedPokemonData);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <Pokemon pokemon = {pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
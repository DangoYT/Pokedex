import React, { useEffect, useState } from 'react';
import Pokemon from './Components/Pokemon';

const App = () => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150';
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        setFilteredPokemonList(detailedPokemonData);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que useEffect se ejecute solo una vez al montar el componente

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);

    // Filtrar la lista de Pokémon según el término de búsqueda
    const filteredList = pokemonList.filter((pokemon) => {
      const name = pokemon.name.toLowerCase();
      return name.includes(newValue.toLowerCase());
    });

    setFilteredPokemonList(filteredList);
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar por nombre o ID..."
      />
      <ul>
        {filteredPokemonList.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;

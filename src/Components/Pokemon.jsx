import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokemondata', { state: pokemon });
  };

  return (
    <div onClick={handleClick}>
      <li key={pokemon.id}>
        <img src={pokemon.front_default} alt="" />
        <p>Nombre: {pokemon.name}</p>
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
        <hr />
      </li>
    </div>
  );
}

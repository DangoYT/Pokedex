import React from 'react';
import { useLocation } from 'react-router-dom';
import "./pokemon.css"

export default function PokemonData() {
    const location = useLocation();
    const pokemon = location.state;

    return (
        <div className="pokemon">
            <p className="pokemon__name">{pokemon.name}</p>
            <span className="pokemon__id">{pokemon.id}</span>
            <img className="pokemon__image" src={pokemon.front_default} alt="" />

            <ul className="pokemon__types">
                {pokemon.types && pokemon.types.map((type, index) => (
                    <li key={index} className="pokemon__type">{type.type.name}</li>
                ))}
            </ul>

            <p className="pokemon__height">{pokemon.height}</p>
            <p className="pokemon__weight">{pokemon.weight}</p>

            <ul className="pokemon__abilities">
                {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                    <li key={index} className="pokemon__ability">
                        {ability.ability.name} {ability.is_hidden ? '(oculta)' : ''}
                    </li>
                ))}
            </ul>

            <ul className="pokemon__stats">
                {Array.isArray(pokemon.stats) && pokemon.stats.length > 0 ? (
                    pokemon.stats.map((stat, index) => (
                        <li key={index} className="pokemon__stat">
                            {stat.base_stat}
                        </li>
                    ))
                ) : (
                    <li className="pokemon__stat">No hay estadísticas disponibles</li>
                )}
            </ul>
        </div>
    );
}

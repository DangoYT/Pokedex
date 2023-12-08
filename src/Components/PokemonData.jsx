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
            <img className="pokemon__image" src={pokemon.sprites.front_default} alt="" />

            <ul className="pokemon__types">
                {pokemon.types.map((type, index) => (
                    <li key={index} className="pokemon__type">{type.type.name}</li>
                ))}
            </ul>

            <p className="pokemon__height">{pokemon.height}</p>
            <p className="pokemon__weight">{pokemon.weight}</p>

            <ul className="pokemon__abilities">
                {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="pokemon__ability">
                        {ability.ability.name}
                    </li>
                ))}
            </ul>

            {pokemon.stats.map((stat, index) => (
                <p className="pokemon__stats" key={index}>{stat.base_stat}</p>
            ) )}

        </div>
    );
}
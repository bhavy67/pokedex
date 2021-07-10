import React from 'react';
import { PokemonSchema } from '../../types/PokemonScehma';
import './PokeSearchResult.css';

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon}: PokeSearchResultProps) => {
    const  {name, id, height, weight, base_experience, sprites } = selectedPokemon || {};
    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                ? (
                    <div>
                        <img className="pokemon-animated-sprites" src={sprites?.animated || sprites?.normal} alt="pokemon" />
                        <p>Name: {name}</p>
                        <p>ID: {id}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Experience: {base_experience}</p>
                    </div>
                )
                : (
                    <h2>Welcome to Pokedex</h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult;

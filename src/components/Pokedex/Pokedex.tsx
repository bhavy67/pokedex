import React from 'react';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Pokelist from '../Pokelist/Pokelist';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';
import { PokemonSchema } from '../../types/PokemonScehma';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) =>  void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({ searchedPokemons,selectedPokemon, onInputChange, onPokemonClick}: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
                <Pokelist onPokemonClick={onPokemonClick} searchedPokemons={searchedPokemons} />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    )
}

export default Pokedex;

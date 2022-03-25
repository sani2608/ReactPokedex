import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema';
import './PokeSearchResult.css'

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({selectedPokemon}: PokeSearchResultProps) => {

    const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {};

  return (
    <div className="poke-result-card">
        {
            selectedPokemon ?
            (
                <div className="poke-result-card-selected">
                    <img 
                        className="pokemon-animated-sprites"
                        src={sprites?.animated || sprites?.animated}
                        alt="pokemon"
                    />
                    <p>Name: {name}</p>
                    <p>Id: {id}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Base Exp: {base_experience}</p>
                </div>
            ) :
            (
                <h2>Welcome to the Pokedex</h2>
            )
        }

    </div>
  )
}

export default PokeSearchResult
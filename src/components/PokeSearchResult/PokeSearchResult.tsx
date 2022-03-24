import React from 'react'
import './PokeSearchResult.css'

const PokeSearchResult = () => {
    const selectedPokemon = true;
  return (
    <div className="poke-result-card">
        {
            selectedPokemon ?
            (
                <div className="poke-result-card-selected">
                    <p>Name: Pikachu</p>
                    <p>Id: Some id</p>
                    <p>Height: some Height</p>
                    <p>Weight: some weight</p>
                    <p>Base Exp: 100xp</p>
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
import React from 'react'
import './Pokecard.css'

interface PokecardProps {
  spriteUrl?: string;
  name: string;
  onPokemonClick: (inputValue: string) => void;
}

const Pokecard = ({ spriteUrl, name, onPokemonClick }: PokecardProps) => {
  return (
    <div className="pokecard" onClick={(e) => onPokemonClick(name)}>
      <img className="pokemon-sprite" alt="pokemon.name" src={spriteUrl} />
      <p>{name}</p>
    </div>
  );
};

export default Pokecard
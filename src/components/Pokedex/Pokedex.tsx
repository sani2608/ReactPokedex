import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";

import "./Pokedex.css";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  onInputChange: (inputValue: string) => void;
  onPokemonClick: (inputValue: string) => void;
  selectedPokemon: PokemonSchema | undefined;
}

const Pokedex = ({ searchedPokemons, onInputChange, onPokemonClick, selectedPokemon }: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox onInputChange={onInputChange} />
        <Pokelist searchedPokemons={searchedPokemons} onPokemonClick={onPokemonClick}/>
      </div>
      <div className="pokesearch-container">
        <PokeSearchResult  selectedPokemon={selectedPokemon}/>
      </div>
    </div>
  );
};

export default Pokedex
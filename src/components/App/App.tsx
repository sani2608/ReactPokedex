import path from "path";
import React from "react";
import { pokemonData } from "../../data/pokemonData";
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";
import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}
class App extends React.Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchedPokemonData = (
    pokemons: UnpatchedPokemonSchema[]
  ): PokemonSchema[] => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (error) {
        console.log("Exception while parsing the aprites", error);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };
      return patchedPokemon;
    });
    return patchedPokemons;
  };

  componentDidMount() {
    console.log("App componentDidMount");
    //patch the stringified sprites
    const patchedPokemons: PokemonSchema[] =
      this.patchedPokemonData(pokemonData);

    console.log(patchedPokemons);
    //update the state with the patched pokemons
    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputchange = (inputValue: string) => {
    console.log(inputValue);
    const { allPokemons } = this.state;
    const searchedPokemons = allPokemons.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    this.setState({
      searchField: inputValue,
      searchedPokemons: searchedPokemons,
    });
  };

  handleClick = (pokemonName: string) => {
    const { allPokemons } = this.state;

    const selectedPokemon = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );

    this.setState({selectedPokemon});
  };

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex
          searchedPokemons={this.state.searchedPokemons}
          selectedPokemon={this.state.selectedPokemon}  
          onInputChange={this.handleInputchange}
          onPokemonClick={this.handleClick} />
      </div>
    );
  }
}

export default App;

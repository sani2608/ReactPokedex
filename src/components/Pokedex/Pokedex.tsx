import React from "react";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";

import './Pokedex.css';


const Pokedex = () => {
  return (
    <div className="pokedex-container">
        <div className="pokelist-container">
            <SearchBox/>
            <Pokelist/>
        </div>
        <div className="pokesearch-container">
            <PokeSearchResult/>
        </div>

    </div>
  )
}

export default Pokedex
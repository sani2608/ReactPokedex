import React from "react";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";

import './Pokedex.css';


const Pokedex = () => {
  return (
    <div className="pokedex-container">
        <div className="pokelist-container">
            pokelist 
        </div>
        <div className="pokesearch-container">
            <PokeSearchResult/>
        </div>

    </div>
  )
}

export default Pokedex
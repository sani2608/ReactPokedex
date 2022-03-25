import React from "react";
import Pokedex from "../Pokedex/Pokedex";

import './App.css';

class App extends React.Component {
    componentDidMount () {
        console.log('App componentDidMount');
    }
    render () {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex/>
            </div>
        );
    }
}


export default App;
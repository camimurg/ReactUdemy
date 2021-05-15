import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <p>Total Experience: {this.props.totExp}</p>
                <p>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                        id={p.id} 
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;
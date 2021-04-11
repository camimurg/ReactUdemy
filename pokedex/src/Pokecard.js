import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <img src={imgSrc} alt={this.props.name} className="Pokecard-image"/>
                <p className="Pokecard-type">Type: {this.props.type}</p>
                <p className="Pokecard-exp">EXP: {this.props.exp}</p>               
            </div>
        )
    }
}

export default Pokecard;
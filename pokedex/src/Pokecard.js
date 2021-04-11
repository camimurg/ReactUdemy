import React, { Component } from 'react';

class Pokecard extends Component {
    render() {
        {name, image, type} = this.props
        return (
            <div className="Pokecard">
                <h2>{name}</h2>
                <p> {image}</p>
                <p> {type}</p>
            </div>
        )
    }
}

export default Pokecard;
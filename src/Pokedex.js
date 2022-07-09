import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex">
                <h2 className={this.props.isWinner ? "winner" : "loser"}>{this.props.isWinner ? "This Hand Won" : "This hand loses!"}</h2>
                <p>Total Experience: {this.props.exp}</p>
                    <div className="Pokedex-cards">
                        {this.props.pokemons.map((p) => (
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
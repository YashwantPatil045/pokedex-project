import React, {Component} from "react";
import "./Pokecard.css";

const poke_img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function threeDigitId(num) {
    return num <= 999 ? `00${num}`.slice(-3) : num ;
}

class Pokecard extends Component {
    render() {
        let img_Src = `${poke_img}${threeDigitId(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h3>{this.props.name}</h3>
                <div className="Pokecard-image">
                    <img src={img_Src} />
                </div>
                <div className="Pokecard-data">
                    <p>Type: {this.props.type}</p>
                    <p>Exp: {this.props.exp}</p>
                </div>
            </div>  
        )
    }
};

export default Pokecard;
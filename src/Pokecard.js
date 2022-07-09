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
                <img src={img_Src} alt="Charmander" />
                <div>{this.props.type}</div> 
                <div>{this.props.exp}</div>
            </div>
            
        )
    }
};

export default Pokecard;
import React, { Component } from "react";
import Spinner from "../spinner/spinner"

import SwapiService from "../../services/swapi-service"

import "./random-planet.css"

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }
    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15 + 2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? < PlanetView planet={planet} /> : null;

        return (
            <div className="bg-dark random-planet">
                {spinner}
                {content}
            </div>
        )

    }

}

const PlanetView = ({ planet }) => {
    const { planetName, population, rotationPeriod, diameter, id } = planet;
    return (
        <React.Fragment>
            <div className="random-planet-img">
                <img alt="/#" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            </div>
            <div>
                <h4>{planetName}</h4>
                <ul>
                    <li>
                        <span className="term">Population </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span className="term"> Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span className="term"> Diametr </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

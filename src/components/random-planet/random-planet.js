import React, { Component } from "react";
import PropTypes from "prop-types"

import Spinner from "../spinner/"
import ErrorIndicator from "../error-indicator/"

import SwapiService from "../../services/swapi-service"

import "./random-planet.css"

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 5000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet();
        setInterval(this.updatePlanet, updateInterval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15 + 2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? < PlanetView planet={planet} /> : null;
        const errorMassage = error ? <ErrorIndicator /> : null;

        return (
            <div className="bg-dark random-planet">
                {errorMassage}
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

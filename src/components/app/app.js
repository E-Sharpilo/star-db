import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import ErrorIndicator from "../error-indicator";
import Header from "../header/";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page/";


// import ItemList from "../item-list/";
// import PersonDetails from "../person-details/";
// import PlanetDetails from "../planet-details/";

// import StarshipDetails from "../starship-details";

import "./app.css";

export default class App extends Component {
    swapi = new SwapiService();
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div className="app" >
                <Header />
                <RandomPlanet />
                <PeoplePage />


            </div>

        )
    }

}



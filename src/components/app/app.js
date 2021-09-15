import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import ErrorIndicator from "../error-indicator";
import Header from "../header/";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page/";


import ItemList from "../item-list/";
import PersonDetails from "../person-details/";
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


                <div className="row mb2 app-main">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapi.getAllPlanets} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className="row mb2 app-main">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapi.getAllStarships} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>

        )
    }

}



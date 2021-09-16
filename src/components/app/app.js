import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Col2Style from "../col-2-style/"

import ErrorIndicator from "../error-indicator";
import Header from "../header/";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page/";


// import ItemList from "../item-list/";
import ItemDetails from "../item-details/";
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

        const personDetails = (
            <ItemDetails
                itemId={3}
                getData={this.swapi.getPerson}
                getImageUrl={this.swapi.getPersonImage}
            />
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={this.swapi.getStarship}
                getImageUrl={this.swapi.getStarshipImage}
            />
        )

        return (
            <div className="app" >
                <Header />
                <RandomPlanet />
                <PeoplePage />


                <Col2Style left={personDetails} right={starshipDetails} />

            </div>

        )
    }

}



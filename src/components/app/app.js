import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { SwapiProvider } from "../swapi-context/swapi-context"

import ErrorIndicator from "../error-indicator";
import Header from "../header/";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages"





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
            <SwapiProvider value={this.swapi}>
                <div className="app" >
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </div>
            </SwapiProvider>
        )
    }

}



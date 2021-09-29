import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


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
                <Router>
                    <div className="app" >
                        <Header />
                        <RandomPlanet />
                        <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planets" component={PlanetPage} />
                        <Route path="/Starships" component={StarshipPage} />
                    </div>
                </Router>
            </SwapiProvider>
        )
    }

}



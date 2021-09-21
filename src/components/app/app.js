import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { SwapiProvider } from "../swapi-context/swapi-context"
import Col2Style from "../col-2-style/"

import ErrorIndicator from "../error-indicator";
import Header from "../header/";
import RandomPlanet from "../random-planet";
// import PeoplePage from "../people-page/";


// import ItemList from "../item-list/";
// import ItemDetails from "../item-details/";
// import PlanetDetails from "../planet-details/";

// import StarshipDetails from "../starship-details";

import {
    PersonList,
    PersonDetails,
    PlanetDetails,
    PlanetList,
    StarshipList,
    StarshipDetails
} from "../sw-components/"


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

        console.log(this.swapi.getStarship(5))
        return (
            <SwapiProvider value={this.swapi}>
                <div className="app" >
                    <Header />
                    <RandomPlanet />
                    <Col2Style
                        left={<PersonList />}
                        right={
                            <PersonDetails itemId={11}></PersonDetails>
                        }
                    />
                    <Col2Style
                        left={<PlanetList />}
                        right={
                            <PlanetDetails itemId={5}></PlanetDetails>
                        }
                    />
                    <Col2Style
                        left={<StarshipList />}
                        right={
                            <StarshipDetails itemId={9}></StarshipDetails>
                        }
                    />

                </div>
            </SwapiProvider>
        )
    }

}



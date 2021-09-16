import React, { Component } from "react";
import ErrorBoundry from "../error-boundry/"
import Col2Style from "../col-2-style/";

import ItemList from "../item-list/";
import ItemDetails from "../item-details";

import SwapiService from "../../services/swapi-service"


import "./people-page.css"

export default class PeoplePage extends Component {
    swapi = new SwapiService();
    state = {
        selectedPerson: 3
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {


        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllPeople}>

                {(item) => `${item.name} (${item.gender})`}

            </ItemList>
        );
        const personDetails = (<ItemDetails
            itemId={this.state.selectedPerson}
            getData={this.swapi.getPerson}
            getImageUrl={this.swapi.getPersonImage} />);
        return (
            <ErrorBoundry>
                <Col2Style left={itemList} right={personDetails} />
            </ErrorBoundry>
        )
    }
}
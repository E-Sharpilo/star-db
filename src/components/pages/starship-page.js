import React, { Component } from "react";
import Col2Style from "../col-2-style"
import { StarshipList, StarshipDetails } from "../sw-components/"

export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        const { selectedItem } = this.state
        return (
            <Col2Style
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem}></StarshipDetails>} />
        )
    }
}
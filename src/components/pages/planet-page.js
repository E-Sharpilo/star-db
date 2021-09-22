import React, { Component } from "react";
import Col2Style from "../col-2-style"
import { PlanetList, PlanetDetails } from "../sw-components/"

export default class PlanetPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem}></PlanetDetails>} />
        )
    }
}
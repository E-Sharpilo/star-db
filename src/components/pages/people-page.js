import React, { Component } from "react";
import Col2Style from "../col-2-style"
import { PersonList, PersonDetails } from "../sw-components/"

export default class PeoplePage extends Component {
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
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem}></PersonDetails>} />
        )
    }
}
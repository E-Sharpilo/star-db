import React, { Component } from "react";
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner/"
import "./item-list.css"

export default class ItemList extends Component {

    swapi = new SwapiService()

    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapi.getAllPeople().then((peopleList) => {
            this.setState({
                peopleList
            })
        })
    }

    renderItems = (arr) => {
        return arr.map(({ personName, id }) => {
            return (
                <li className="list-group-item list-group-item-action"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >{personName}</li>
            )
        })
    }

    render() {

        const { peopleList } = this.state;


        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }

}

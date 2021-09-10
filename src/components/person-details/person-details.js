import React, { Component } from "react";
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner/"

import "./person-details.css"

export default class PersonDetails extends Component {
    swapi = new SwapiService();

    state = {
        person: null,
        loading: true,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapi.getPerson(personId)
            .then((person) => {
                this.setState({ person, loading: false })
            })
    }
    render() {
        const { loading, person } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? < DetailsPerson person={person} /> : null;
        if (!this.state.person) {
            return <span>Select person</span>
        }
        return (
            <div className="person-details card" >
                {spinner}
                {content}
            </div>
        )
    }
}


const DetailsPerson = ({ person }) => {
    const { id, personName, hairColor, gender, height, eyeColor, birth } = person;
    return (
        <React.Fragment>
            <div className="img-inner">
                <img alt="/#" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            </div>
            <div className="card-body">
                <h4>{personName}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: <span>{gender}</span></li>
                    <li className="list-group-item">Birth Year: <span>{birth}</span></li>
                    <li className="list-group-item">Height: <span>{height}</span></li>
                    <li className="list-group-item">Hair Color: <span>{hairColor}</span></li>
                    <li className="list-group-item">Eye Color: <span>{eyeColor}</span></li>
                </ul>
            </div>
        </React.Fragment>
    )
}
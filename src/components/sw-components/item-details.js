import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();

const { getPerson, getPlanet, getStarship,
    getPlanetImage, getPersonImage, getStarshipImage } = swapi



const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >
            <Record field="gender" label="Gender" />
            <Record field="birth" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="hairColor" label="Hair Color" />
            <Record field="personWeight" label="Weight" />
            <Record field="height" label="Height" />
        </ItemDetails>
    )
}
const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage} >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diametr" />
            <Record field="orbitalPeriod" label="Orbital Period" />
        </ItemDetails>
    )
}
const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage} >
            <Record field="starshipModel" label="Model" />
            <Record field="starshipClass" label="Class" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="starshipLength" label="Length" />
            <Record field="starshipCost" label="Cost in credits" />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
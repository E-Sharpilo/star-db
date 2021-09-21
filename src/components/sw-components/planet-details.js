import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";

import { withSwapi } from "../hoc-helper/"

const PlanetDetails = (props) => {
    return (
        <ItemDetails
            {...props} >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diametr" />
            <Record field="orbitalPeriod" label="Orbital Period" />
        </ItemDetails>
    )
}
const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
};


export default withSwapi(mapMethodsToProps)(PlanetDetails)
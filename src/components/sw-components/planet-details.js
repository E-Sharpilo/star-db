import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";

import { withSwapi } from "../hoc-helper/"

const PlanetDetails = ({ itemId, swapi }) => {
    const { getPlanet, getPlanetImage } = swapi
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


export default withSwapi(PlanetDetails)
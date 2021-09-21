import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapi } from "../hoc-helper";

const StarshipDetails = ({ itemId, swapi }) => {
    const { getStarship, getStarshipImage } = swapi
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

export default withSwapi(StarshipDetails);
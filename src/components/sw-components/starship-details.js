import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapi } from "../hoc-helper";

const StarshipDetails = (props) => {
    return (
        <ItemDetails
            {...props} >
            <Record field="starshipModel" label="Model" />
            <Record field="starshipClass" label="Class" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="starshipLength" label="Length" />
            <Record field="starshipCost" label="Cost in credits" />
        </ItemDetails>
    )
}


const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getStarship,
        getImageUrl: swapi.getStarshipImage
    }
};


export default withSwapi(mapMethodsToProps)(StarshipDetails);
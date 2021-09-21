import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapi } from "../hoc-helper"

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="gender" label="Gender" />
            <Record field="birth" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="hairColor" label="Hair Color" />
            <Record field="personWeight" label="Weight" />
            <Record field="height" label="Height" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getData: swapi.getPerson,
        getImageUrl: swapi.getPersonImage
    }
};

export default withSwapi(mapMethodsToProps)(PersonDetails);

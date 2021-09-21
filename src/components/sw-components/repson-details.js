import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiConsumer } from "../swapi-context/swapi-context"


const PersonDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {
                ({ getPerson, getPersonImage }) => {
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
            }
        </SwapiConsumer>
    )
}

export default PersonDetails;
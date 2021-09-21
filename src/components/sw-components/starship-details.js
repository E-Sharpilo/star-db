import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiConsumer } from "../swapi-context/swapi-context"

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
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
            }
        </SwapiConsumer>
    )
}

export default StarshipDetails;
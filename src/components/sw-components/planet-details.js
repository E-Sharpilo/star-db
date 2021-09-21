import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiConsumer } from "../swapi-context/swapi-context"

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
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
            }
        </SwapiConsumer>
    )
}


export default PlanetDetails
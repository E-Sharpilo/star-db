import React from "react";
import { SwapiConsumer } from "../swapi-context/swapi-context"

const withSwapi = (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                        return (
                            <Wrapped {...props} swapi={swapi} />
                        )
                    }
                }
            </SwapiConsumer>
        )

    }
}

export default withSwapi
import React from "react";
import { SwapiConsumer } from "../swapi-context/swapi-context"

const withSwapi = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                        const serviceProps = mapMethodsToProps(swapi);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiConsumer>
        )

    }
}

export default withSwapi
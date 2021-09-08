import React from "react";

import "./random-planet.css"

const RandomPlanet = () => {
    return (
        <div className="bg-dark random-planet">
            <div className="random-planet-img">
                <img alt="/#" src="https://starwars-visualguide.com/assets/img/planets/4.jpg" />
            </div>
            <div>
                <h4>Hoth</h4>
                <ul>
                    <li>Population 20000</li>
                    <li>Rotation Period 36</li>
                    <li>Diametr 4200</li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet;
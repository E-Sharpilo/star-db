import React from "react";

import "./person-details.css"

const PersonDetails = () => {
    return (
        <div className="person-details card">

            <img alt="/#" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />


            <div className="card-body">
                <h4>R2-D2</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: <span>male</span></li>
                    <li className="list-group-item">Birth Year: <span>43</span></li>
                    <li className="list-group-item">Height: <span>96cm</span></li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails
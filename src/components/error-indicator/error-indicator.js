import React from "react";

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} width="100px" height="100px" alt="error-icon" />
            <span className="boom"> BOOM! </span>
            <span>
                something  has gone wrong
            </span>
            <span>
                (we already sent our droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;
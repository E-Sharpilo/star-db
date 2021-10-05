import React from "react";
import { Link } from "react-router-dom"

import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <h3>
                <Link to="/">Star DB</Link>
            </h3>
            <ul>
                <li><Link to="/people/">People</Link></li>
                <li><Link to="/planets/">Planets</Link></li>
                <li><Link to="/starships/">Sterships</Link></li>
            </ul>
        </div>
    )
}

export default Header;
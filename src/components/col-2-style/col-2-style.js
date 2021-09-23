import React from "react";
import PropTypes from "prop-types";
import "./col-2-style.css"

const Col2Style = ({ left, right }) => {
    return (
        <div className="row mb2 app-main">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

Col2Style.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Col2Style;
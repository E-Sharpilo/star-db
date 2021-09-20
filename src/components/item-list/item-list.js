import React from "react";

import "./item-list.css"


const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props

    const items = data.map((item) => {
        const { id } = item
        const value = renderLabel(item);
        return (
            <li className="list-group-item list-group-item-action"
                key={id}
                onClick={() => onItemSelected(id)}
            >{value}</li>
        )
    })
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    )
}

export default ItemList;

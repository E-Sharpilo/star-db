import React from "react";
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helper"

import "./item-list.css"

const { getAllPeople } = new SwapiService();


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





export default withData(ItemList, getAllPeople);

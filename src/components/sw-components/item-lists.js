
import React from "react";
import ItemList from "../item-list/";
import { withData, withSwapi } from "../hoc-helper";




const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapi) => {
    return {
        getData: swapi.getAllStarships
    };
};

const PersonList =
    withSwapi(mapPersonMethodsToProps)(
        withData(
            withChildFunction(renderName)(ItemList)));

const PlanetList =
    withSwapi(mapPlanetMethodsToProps)(
        withData(
            withChildFunction(renderName)(ItemList)));
const StarshipList =
    withSwapi(mapStarshipMethodsToProps)(
        withData(
            withChildFunction(renderName)(ItemList)));



export {
    PersonList,
    PlanetList,
    StarshipList
}
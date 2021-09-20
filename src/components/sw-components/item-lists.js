
import ItemList from "../item-list/";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapi


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}


const listWithChildren = withChildFunction(ItemList, ({ name }) => <span>{name}</span>)

const PersonList = withData(listWithChildren, getAllPeople)
const PlanetList = withData(listWithChildren, getAllPlanets)
const StarshipList = withData(listWithChildren, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transfomStarship);
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformPlanet(starship);
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }
    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }
    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extractId = (item) => {
        const regular = /\/([0-9]*)\/$/;
        return item.url.match(regular)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            orbitalPeriod: planet.orbital_period,
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            personWeight: person.mass,
            hairColor: person.hair_color,
            gender: person.gender,
            height: person.height,
            eyeColor: person.eye_color,
            birth: person.birth_year,
        };
    };

    _transfomStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            starshipModel: starship.model,
            starshipClass: starship.starship_class,
            manufacturer: starship.manufacturer,
            starshipCost: starship.cost_in_credits,
            starshipLength: starship.length,
        }
    }
}
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }

    _extractId(item) {
        const regular = /\/([0-9]*)\/$/;
        return item.url.match(regular)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            orbitalPeriod: planet.orbital_period,
        };
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            personName: person.name,
            personWeight: person.mass,
            hairColor: person.hair_color,
            gender: person.gender,
            height: person.height,
            eyeColor: person.eye_color,
            birth: person.birth_year,
        };
    };

    _transfomStarship(starship) {
        return {
            id: this._extractId(starship),
            starshipName: starship.name,
            starshipModel: starship.model,
            starshipClass: starship.starship_class,
            manufacturer: starship.manufacturer,
            starshipCost: starship.cost_in_credits,
            starshipLength: starship.length,
        }
    }
}
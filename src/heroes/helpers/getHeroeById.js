import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
    
    const heroe = heroes.find(element => element.id === id);
    
    return heroe;
}
import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = "" ) => {
    
    //Parsiando el name recibido
    name = name.trim().toLocaleLowerCase();

    if( name.length === 0 ) return []; 

    const results = heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes( name ));

    return results;
}

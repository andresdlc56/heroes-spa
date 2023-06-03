import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    
    //Lista de publishers validos
    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

    //Validacion
    if( !validPublishers.includes( publisher ) ) {
        throw new Error(`El publisher ${ publisher } no existe en nuestra DB`);
    }

    const result = heroes.filter((heroe) => (heroe.publisher === publisher));

    return result;
}

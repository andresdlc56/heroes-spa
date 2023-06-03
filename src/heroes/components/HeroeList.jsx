import { HeroeCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";


export const HeroeList = ({ publisher }) => {
    
    //Rememoriza el resultado de la funcion "getHeroesByPublisher" cada vez que el publisher cambie
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                
                heroes.map((heroe) => (
                    <HeroeCard 
                        key={ heroe.id } 
                        { ...heroe }
                    />
                ))    
            }
        </div>
    )
}

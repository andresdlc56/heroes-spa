import { Link } from "react-router-dom";

export const HeroeCard = ({
    id, 
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {

    //Capturando la url del heroe
    const heroeImageUrl = `/heroes/${ id }.jpg`;

    const arrayCharacters = characters.split(","); // => [“123”,”456”,”789”]

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={ heroeImageUrl } alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            
                            {
                                (arrayCharacters.includes(alter_ego)) 
                                ? ( <p>{ characters }</p> ) 
                                : ( <p className="card-text">{ alter_ego }</p> )
                            }

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            
                            <Link to={ `/heroe/${ id }` }>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

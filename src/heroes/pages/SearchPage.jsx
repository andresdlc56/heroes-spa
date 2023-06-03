import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

//CustomHook
import { useForm } from "../../hooks";

//Helpers
import { getHeroesByName } from "../helpers";


//Components
import { HeroeCard } from "../components";



export const SearchPage = () => {

    //console.log('Me construi');

    const navigate = useNavigate();
    
    //Funcion necesaria para obtener datos desde la url
    const location = useLocation();
    //console.log({ location });


    //Capturando y parsiando los datos obtenidos desde la url
    const { q = '' } = queryString.parse( location.search );
    //console.log({ q });

    //Esto siempre se esta ejecutando
    //Capturando los heroes que coincidan con el query (q)
    const heroes = getHeroesByName(q);

    //CustomHook manejador del formulario
    const { onInputChange, onResetForm, searchText } = useForm({
        searchText: q
    });


    //Manejador del submit del formulario
    const onSearchSubmit = (e) => {
        e.preventDefault();

        //if( searchText.trim().length <= 1 ) return;

        //Agregando a la ruta actual la cadena definida en "navigate"
        navigate(`?q=${ searchText.toLowerCase().trim() }`);
    }

    console.log(heroes)

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            placeholder="Buscar Heroe..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button 
                            className="btn btn-outline-primary mt-1"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === "")
                        ? (
                            <div className="alert alert-primary">
                                Search a hero
                            </div>
                        )
                        : (heroes.length === 0) && (
                            <div className="alert alert-danger">
                                No Hero with <b>{ q }</b>
                            </div>
                        )

                    }
                    

                    

                    {
                        heroes.map((heroe) => (
                            <HeroeCard key={ heroe.id } { ...heroe } />
                        ))
                    }

                    {/* Mostrar un componente aqui si encuentra el heroe */}
                    {/**/}
                </div>
            </div>
        </>
    )
}

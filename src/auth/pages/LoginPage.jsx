import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

    //Obteniendo el state global de la app con sus props
    const { login } = useContext( AuthContext );
  

    const navigate = useNavigate();
    const onLogin = () => {

        //Obtener del localStorage la ultima ruta (lastPath) guardada 
        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Andres');
        
        //Redirigir a la ruta "lastPath"
        navigate(lastPath, {
            replace: true
        });
    }

  
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    )
}

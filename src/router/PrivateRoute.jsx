import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";


import { AuthContext } from "../auth/context";


export const PrivateRoute = ({ children }) => {
    
    const { authState } = useContext(AuthContext);

    //Captura la ruta y el query paramts de la url
    const { pathname, search } = useLocation();
    

    //Ejecutar el efecto cada vez que el path o query paramts cambie
    useEffect(() => {
        const lastPath = pathname + search;
        
        //Almacena la ruta en el localStorage
        localStorage.setItem('lastPath', lastPath);
        //console.log('re-render');    
    }, [pathname, search]);
    

    return (authState.logged)
        ? children
        : <Navigate to="/login" />
}

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";


/*const initialState = {
    logged: false
}*/


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {
    
    const [ authState, dispatch ] = useReducer(AuthReducer, {}, init);

    //Manejador del evento login
    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name
            }
        }

        //Guardando el payload en el localStorage
        localStorage.setItem('user', JSON.stringify(action.payload));

        dispatch( action );
    }


    const logout = () => {
        const action = {
            type: types.logout
        }

        //Aqui el limpiado del localStorage
        localStorage.removeItem('user');

        dispatch( action );
    }

    return (
        <AuthContext.Provider value={{
            authState,
            login,
            logout
        }} >
            { children }
        </AuthContext.Provider>
    )
}

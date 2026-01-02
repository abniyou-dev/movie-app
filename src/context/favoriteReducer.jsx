import { createContext, useContext, useEffect, useReducer } from "react";
import { initialVal, reducer } from "./reducer";



export const favoritesContext = createContext();

export const MoviesProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(reducer, initialVal());

    useEffect(() => {
            try {
                localStorage.setItem('movies', JSON.stringify(state));
            } catch (err) {
                console.error('error', err);
            }
    }, [state])


    return (
        <favoritesContext.Provider value={{state, dispatch}}>
            {children }
        </favoritesContext.Provider>
    );
    
};

export const useFavorites = () => {
     return useContext(favoritesContext);
};
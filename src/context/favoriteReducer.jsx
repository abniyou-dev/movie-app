import { createContext, useContext, useReducer } from "react";
import { initialVal, reducer } from "./reducer";



export const favoritesContext = createContext();

export const MoviesProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(reducer, initialVal);

    return (
        <favoritesContext.Provider value={{state, dispatch}}>
            {children }
        </favoritesContext.Provider>
    );
    
};

export const useFavorites = () => {
     return useContext(favoritesContext);
};
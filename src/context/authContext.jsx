import { createContext, useContext, useState } from "react";


const AuthContext = createContext();
const initAuthData = (defaultVal) => {
    try {
        const data = JSON.parse(localStorage.getItem('currentUser'));
        if (data) return data.name;
    } catch (err) {
        console.log('erroor', err);
    }
    return defaultVal;
}

export const AuthProvider = ({children}) =>{

    const [name, setName] = useState(initAuthData(null));
    return (
        <AuthContext.Provider value={{name, setName}}>
            {children}
        </AuthContext.Provider>
    ) 

}

export const useAuth = () => {
    return useContext(AuthContext);
}
import React, {createContext, useContext, useState} from 'react';

export const UserContext = createContext();
export const UserProvider=({children}) =>{
    const [user, setUser]=useState("roja");
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext);
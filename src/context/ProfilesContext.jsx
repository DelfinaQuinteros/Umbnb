import { createContext, useContext, useEffect, useState } from "react";
import umbnbApi from "../api/umbnbApi";
import React from "react";
import { AuthContext } from "./AuthContext";

export const ProfilesContext = createContext({})

export const ProfilesProvider = ({ children }) => {

    const [ profile, setProfile ] = useState({nombre: 'Pepe'})
    // setProfile({name: 'Hola'})

    // const { user } = useContext(AuthContext)
    // console.log(user, 'user from profilescontext')

    // useEffect(() => {

        // console.log(profile)
        // setProfile({name: 'Hola'})

    // }, [])

    const loadProfile = async (id) => {
            
            const resp = await umbnbApi.get(`/user/${id}`)
        
            const content = resp.data

            // TODO: cuando hago un logout o un refresh de la app no se actualiza el profile, hay que ver como hacerlo, se actualiza cuando hago un cambio en este codigo
            // console.log(content, 'USER CONTENT')
        
            setProfile(content)
    }

    return (
        <ProfilesContext.Provider value={{ 
            profile,
            loadProfile
         }}>
            {children}
         </ProfilesContext.Provider>
    )
    
}
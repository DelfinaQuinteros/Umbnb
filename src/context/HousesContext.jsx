import { createContext, useContext, useEffect, useState } from "react";
import umbnbApi from "../api/umbnbApi";
import React from "react";
import { AuthContext } from "./AuthContext";

export const HousesContext = createContext({})

export const HousesProvider = ({ children }) => {

    const [houses, setHouses] = useState([])

    const [housesHost, setHousesHost] = useState([])

    const { user, host } = useContext(AuthContext)

    useEffect(() => {

        // TODO: se le puede agregar un try para que no trate de cargar las casas hasta que el usuario no este logueado ya que necesita el token para traer las casas
        loadHouses()

    }, [])

    useEffect(() => {
        // console.log('aca si')
        // if (host == true) {
        //     console.log('Entro aca')
        //     loadHousesByHost()
        //     // console.log('cargo las casas')
        // }
        loadHousesByHost(user)
    }, [user])
    

    const loadHouses = async () => {

        // TODO: despues podemos manipular la paginacion, ahora esta estatica
        const resp = await umbnbApi.get('/house?page=0&size=5')
    
        const content = resp.data.data.content
    
        setHouses([ ...content ])
    }

    const addHouse = async ( house, navigation ) => {
        const resp = await umbnbApi.post('/house', house)
        setHouses([ ...houses, house ])
        navigation.navigate('HousesScreen')
    }

    const loadHousesByHost = async (user) => {
        const resp = await umbnbApi.get(`/house/host/${user}`)
        const content = resp.data
        setHousesHost([ ...content ])
    }

    return (
        <HousesContext.Provider value={{
            houses,
            loadHouses,
            addHouse,
            housesHost
        }}>
            {children}
        </HousesContext.Provider>
    )

}




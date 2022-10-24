import { createContext, useEffect, useState } from "react";
import umbnbApi from "../api/umbnbApi";
import React from "react";

export const HousesContext = createContext({})

export const HousesProvider = ({ children }) => {

    const [houses, setHouses] = useState([])

    useEffect(() => {

        loadHouses()

    }, [])

    const loadHouses = async () => {

        // TODO: despues podemos manipular la paginacion, ahora esta estatica
        const resp = await umbnbApi.get('/house?page=0&size=5')
    
        const content = resp.data.data.content
        // console.log(content)
    
        setHouses([ ...content ])
    }

    const addHouse = async ( house, navigation ) => {
        const resp = await umbnbApi.post('/house', house)
        setHouses([ ...houses, house ])
        navigation.navigate('HousesScreen')
    }

    return (
        <HousesContext.Provider value={{
            houses,
            loadHouses,
            addHouse
        }}>
            {children}
        </HousesContext.Provider>
    )

}




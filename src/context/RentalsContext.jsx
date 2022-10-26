import { createContext, useContext, useEffect, useState } from "react";
import umbnbApi from "../api/umbnbApi";
import React from "react";
import { Alert } from "react-native";
import { AuthContext } from "./AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RentalsContext = createContext({})

export const RentalsProvider = ({ children }) => {

    const { user } = useContext(AuthContext)

    const [rentals, setRentals] = useState([])


    // TODO: este use effect 
    useEffect(() => {

        loadRentals(user)

    }, [user])

    useEffect(() => {
        loadRentals(user)
    }, [])
    
    
    // TODO: aca podriamos con un useEffect traer todas las rentas de ese usuario, si pudieramos acceder a esta informacion en el back, pero no existe el filtro getRentalsByUser

    const addRental = async ( rental, house , navigation ) => {
        const resp = await umbnbApi.post('/rental', rental)
        if(resp.status != 200){
            Alert.alert('Error', 'There was a problem renting the house')
            return
        }
        // console.log(rental, 'RENTAL')
        setRentals([ ...rentals, house ])
        // navigation.navigate('Rentals')
        Alert.alert('Rental created!')
    }


    const loadRentals = async (user) => {

        // TODO: despues podemos manipular la paginacion, ahora esta estatica
        try {
            const resp = await umbnbApi.get(`/rental/${user}`)
    
            const content = resp.data
            const houses = content.map((rental) => {
                return rental.house
            })
        
            setRentals([ ...houses ])
        }catch(e){
            console.log('error', e)
        }
    }

    return (
        <RentalsContext.Provider value={{
            addRental,
            rentals
        }}>
            {children}
        </RentalsContext.Provider>
    )


}
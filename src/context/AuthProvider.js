import React, { useEffect } from 'react'
import { useReducer } from 'react'
import umbnbApi from '../api/umbnbApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'
import { Alert } from 'react-native';

const initialState = {
    // Esto es para comprobar que si se esta checkeando se muestra el loading
    isAuthenticated: 'checking',
    token: null,
    user: null
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState)

    // Este useEffect se dispara solo una vez, cuando el componente se renderiza por primera vez
    useEffect(() => {
      
      validateToken()
  
    }, [])

    const validateToken = async () => {

      // TODO: esta variable no se esta usando pero se puede usar para no me acuerdo que
      const token = await AsyncStorage.getItem('token')

      const { data } = await umbnbApi.post(
        '/verifyToken'
      )

      const { message } = data
      if (message != 'Token succesfully verified') {
        // console.log("Token not valid")
        return
      }

      // console.log(data)
      const { access_token } = data.data
      const { id } = data.data
      
      // console.log("Token valid")
      const action = {
        type: types.login,
        payload: {
          token: access_token,
          user: id
        }
      }
      dispatch(action)

    }
    
 
    const login = async( { email, password } ) => {

      //TODO: esto hay que acomodarlo, por el try no esta muy bien
      //TODO: Hay que comprobar las diferentes respuestas 

        try{

          const resp = await umbnbApi.post(
            '/login',
            {
              email,
              password
            }
          )
          const { access_token } = resp.data.data
          const { id } = resp.data.data
          // console.log(resp.data.data.access_token)
          console.log(access_token);
          console.log(id);

          const action = {
            type: types.login,
            payload: {
              token: access_token,
              user: id
            }
          }
          dispatch(action)
          await AsyncStorage.setItem('token', access_token)

        }catch(error){
          console.log(error)
          //TODO: mostrar error
          Alert.alert('Error', 'Email or password incorrect')
        }

        // el login va a terminar dispachando una accion
    }

    const logout =async() => {
        const action = {
          type: types.logout
          }
          // el login va a terminar dispachando una accion
          dispatch(action)
          await AsyncStorage.removeItem('token')
        }

    // TODO: hay que hacer lo del register
    const register = async( { email, password } ) => {

    }


  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login,
        logout: logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const initialState = {
    isAuthenticated: false,
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState)

    const login = ( { name = '' } ) => {
        const action = {
          type: types.login,
          payload: {
            id: 1,
            name: name
          }
        }
        dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
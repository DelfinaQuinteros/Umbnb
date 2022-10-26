import { types } from "../types/types"


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                host: action.payload.host,
                userData: action.payload.userData
            }
        case types.logout:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                host: null,
                userData: null
            }
        default:
            return state
    }
}
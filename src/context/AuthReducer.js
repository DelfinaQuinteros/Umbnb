import { types } from "../types/types"


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                host: action.payload.host
            }
        case types.logout:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                host: null
            }
        default:
            return state
    }
}
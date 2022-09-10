import { types } from "../types/types"


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case types.logout:
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state
    }
}
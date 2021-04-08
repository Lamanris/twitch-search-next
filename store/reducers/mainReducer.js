import * as types from '../constants'

const initialState = {
    user: {},
    videos: [],
    favorites: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {...state, user: action.payload}
        case types.GET_VIDEOS:
            return {...state, videos: action.payload}
        case types.ADD_TO_FAVORITES:
            return {...state, favorites: action.payload}
        case types.SET_FAVORITES:
            return {...state, favorites: action.payload}
        case types.DELETE_FROM_FAVORITES:
            return {...state, favorites: action.payload}
        default:
            return state
    }
}
import * as types from '../constants'
import axios from "axios";

export const getUser = (channelName) => async dispatch => {
    const res = await axios(`https://api.twitch.tv/helix/users?login=${channelName}`,{
        headers: {
            Authorization: process.env.AUTH_TOKEN,
            ['client-id']: process.env.CLIENT_ID
        }
    })
    dispatch({
        type: types.GET_USER,
        payload: res.data.data[0]
    })
}

export const getVideos = (id) => async dispatch => {
    const res = await axios(`https://api.twitch.tv/helix/videos?user_id=${id}`,{
        headers: {
            Authorization: process.env.AUTH_TOKEN,
            ['client-id']: process.env.CLIENT_ID
        }
    })
    dispatch({
        type: types.GET_VIDEOS,
        payload: res.data.data
    })
}

export const addToFavorites = (dispatch, video) => {
    let localedData = JSON.parse(localStorage.getItem('favorites')) || []
    localedData = [...localedData, video].filter((el, ind, arr) => arr.findIndex(video => (video.id  === el.id)) === ind)
    localStorage.setItem('favorites', JSON.stringify(localedData))
    dispatch({
        type: types.ADD_TO_FAVORITES,
        payload: localedData
    })
}

export const setFavorites = (dispatch) => {
    let localedData = JSON.parse(localStorage.getItem('favorites'))
    dispatch({
        type: types.SET_FAVORITES,
        payload: localedData
    })
}

export const deleteFromFavorites = (dispatch, video) => {
    let localedData = JSON.parse(localStorage.getItem('favorites'))
    localedData = localedData.filter(el => el.id !== video.id)
    localStorage.setItem('favorites', JSON.stringify(localedData))
    dispatch({
        type: types.DELETE_FROM_FAVORITES,
        payload: localedData
    })
}

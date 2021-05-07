import {
    GET_REPOS_REQUEST,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAIL,
    GET_REPOS_RESET
} from '../constants/reposConstants.js'

export const getReposFromGithubReducer = (state = { repos: [] }, action) => {
    switch (action.type) {
        case GET_REPOS_REQUEST:
            return {
                loading: true,
                repos: []
            }
        case GET_REPOS_SUCCESS:
            return {
                loading: false,
                repos: action.payload
            }
        case GET_REPOS_FAIL:
            return {
                loading: false,
                repos: action.payload
            }
        case GET_REPOS_RESET:
            return {
                repos: []
            }
        default:
            return state;
    }
}
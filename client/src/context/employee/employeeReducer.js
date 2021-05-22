import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_EMPLOYEES
} from '../types'

const employeeReducer = (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return{
                ...state,
                users: [],
                loading: false
            }
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default employeeReducer
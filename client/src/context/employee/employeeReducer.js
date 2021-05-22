import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    CLEAR_FILTER
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
            case FILTER_EMPLOYEES:
            return {
                ...state,
                filtered: state.employees.filter(employee => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return employee.firstname.match(regex) || employee.lastname.match(regex) || 
                           employee.email.match(regex) || employee.department.match(regex) ||
                           employee.role.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
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
import{
    SET_LOADING,
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    CLEAR_FILTER,
    CLEAR_CURRENT,
    SET_CURRENT,
    SCHEDULE_MEETING,
    EMPLOYEE_ERROR
} from '../types'

const employeeReducer = (state, action) => {
    switch(action.type){
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
                    return employee.firstName.match(regex) || employee.lastName.match(regex) || 
                           employee.email.match(regex) || employee.department.match(regex) ||
                           employee.role.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SCHEDULE_MEETING:
            return {
                //...state,
                //employees: state.employees.map(employee => employee.email === action.payload.email ? action.payload,!action.payload.isAvailable : employee),
                //current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case EMPLOYEE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default employeeReducer
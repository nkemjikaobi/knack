import React, { useReducer } from 'react'
import axios from 'axios'
import employeeContext from './employeeContext'
import employeeReducer from './employeeReducer'
import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    CLEAR_FILTER
} from '../types'


//For Deployment
let gitHubClientId;
let gitHubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    gitHubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    gitHubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    gitHubClientId = process.env.GITHUB_CLIENT_ID;
    gitHubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const EmployeeState = props => {
    const initialState = {
        employees: [],
        employee: {},
        filtered: null,
        loading: false,
        error: null
    }

    const [ state, dispatch ] = useReducer(employeeReducer, initialState);

    //Search Users
    const searchUsers = async text => {
    setLoading()
    const res = await axios.get(`https:/employee.com/search/users?q=${text}&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`);
    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    })
  }

    //Get Employees
    const getEmployees = async () => {
        setLoading()
        const res = await axios.get(`/api/employees`);
        console.log(res.data);
        dispatch({
            type: GET_EMPLOYEES,
            payload: res.data
        })
      }

        //Filter Employee
        const filterEmployees = text => {
            dispatch({ 
                type: FILTER_EMPLOYEES,
                payload: text 
            })
        }

        //Clear Filter
        const clearFilter = () => {
            dispatch({ 
                type: CLEAR_FILTER 
            })
        }

    //Get Repos
    const getUserRepos = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
      }

    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS})

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <employeeContext.Provider
        value={{
            employees: state.employees,
            employee: state.employee,
            loading: state.loading,
            filtered: state.filtered,
            searchUsers,
            clearUsers,
            getEmployees,
            filterEmployees,
            clearFilter,
            getUserRepos
        }}>
            {props.children}
    </employeeContext.Provider>
}

export default EmployeeState;
import React, { useReducer } from 'react'
import axios from 'axios'
import employeeContext from './employeeContext'
import employeeReducer from './employeeReducer'
import{
    SET_LOADING,
    GET_EMPLOYEES,
    EMPLOYEE_ERROR,
    FILTER_EMPLOYEES,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT,
    SCHEDULE_MEETING
} from '../types'


const EmployeeState = props => {
    const initialState = {
        employees: null,
        current: null,
        filtered: null,
        loading: false,
        error: null
    }

    const [ state, dispatch ] = useReducer(employeeReducer, initialState);

    //Get Employees
    const getEmployees = async () => {
        try {
            setLoading()
            const res = await axios.get(`/api/employees`);
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({ 
                type: EMPLOYEE_ERROR ,
                payload: error.response.msg
               })
        }
       
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

        //Set Current Contact
        const setCurrent = employee => {
            dispatch({ 
                type: SET_CURRENT, 
                payload: employee 
            })
        }

        //Clear Current Contact
        const clearCurrent = () => {
            dispatch({
                 type: CLEAR_CURRENT 
                })
        }

        //Schedule Meeting
        const scheduleMeeting = (current) => {
            dispatch({
                type: SCHEDULE_MEETING,
                payload: current
            })
        }

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <employeeContext.Provider
        value={{
            employees: state.employees,
            current: state.current,
            loading: state.loading,
            filtered: state.filtered,
            getEmployees,
            filterEmployees,
            clearFilter,
            setCurrent,
            clearCurrent,
            scheduleMeeting
        }}>
            {props.children}
    </employeeContext.Provider>
}

export default EmployeeState;
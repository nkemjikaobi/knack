import React, { useContext, useEffect } from 'react';
import EmployeeItem from './EmployeeItem';
import Spinner from '../layout/Spinner';
import employeeContext from '../../context/employee/employeeContext'

const Employees = () => {
    const EmployeeContext = useContext(employeeContext);
    const { loading, employees, getEmployees } = EmployeeContext;

    useEffect(() => {
        getEmployees();
       //eslint-disable-next-line
    }, [])

    if(loading){
        return <Spinner />
    }
    else {
        return (
            <div style={employeeStyle}>
                { employees.map(employee =>  (
                    <EmployeeItem key={employee._id} employee={employee}/>
                ))}
            </div>
        );
    }
}

const employeeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Employees

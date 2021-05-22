import React, { useContext } from 'react';
import EmployeeItem from './EmployeeItem';
import Spinner from '../layout/Spinner';
import employeeContext from '../../context/employee/employeeContext'

const Employees = () => {
    const EmployeeContext = useContext(employeeContext);
    const { loading, users } = EmployeeContext;
    if(loading){
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                { users.map(user =>  (
                    <EmployeeItem/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Employees

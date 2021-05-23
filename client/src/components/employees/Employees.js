import React, { useContext, useEffect, Fragment } from 'react';
import EmployeeItem from './EmployeeItem';
import Spinner from '../layout/Spinner';
import employeeContext from '../../context/employee/employeeContext'
import ScheduleMeetingModal from '../employees/ScheduleMeetingModal';

const Employees = () => {
    const EmployeeContext = useContext(employeeContext);
    const { loading, employees, getEmployees , filtered } = EmployeeContext;

    useEffect(() => {
        getEmployees();
       //eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <ScheduleMeetingModal />
            {employees !== null && !loading ? (
                <div className="employee_style">
                {filtered !== null 
                    ? filtered.map(employee => (
                        <div key={employee._id} > 
                            <EmployeeItem  employee={employee} />
                        </div>
                    ))
                : employees.map(employee => (
                    <div key={employee._id} className=""> 
                        <EmployeeItem employee={employee}/>
                    </div>
                     ))
                }
            </div>
            ) :
             < Spinner /> }
        </Fragment>
    )
}

export default Employees

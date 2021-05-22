import React, { useContext, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
                <TransitionGroup className="employee_style">
                {filtered !== null 
                    ? filtered.map(employee => (
                        <CSSTransition key={employee._id} timeout={500}  > 
                            <EmployeeItem  employee={employee} />
                        </CSSTransition>
                    ))
                : employees.map(employee => (
                    <CSSTransition key={employee._id} timeout={500} className=""> 
                        <EmployeeItem employee={employee}/>
                    </CSSTransition>
                     ))
                }
            </TransitionGroup>
            ) :
             < Spinner /> }
        </Fragment>
    )
}

export default Employees

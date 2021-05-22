import React, { useContext, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EmployeeItem from './EmployeeItem';
import Spinner from '../layout/Spinner';
import employeeContext from '../../context/employee/employeeContext'

const Employees = () => {
    const EmployeeContext = useContext(employeeContext);
    const { loading, employees, getEmployees , filtered } = EmployeeContext;

    useEffect(() => {
        getEmployees();
       //eslint-disable-next-line
    }, [])

    // if(loading){
    //     return <Spinner />
    // }
    // else {
    //     return (
    //         <div style={employeeStyle}>
    //             { employees.map(employee =>  (
    //                 <EmployeeItem key={employee._id} employee={employee}/>
    //             ))}
    //         </div>
    //     );
    // }

    return (
        <Fragment>
            {employees !== null && !loading ? (
                <TransitionGroup>
                {filtered !== null 
                    ? filtered.map(employee => (
                        <CSSTransition key={employee._id} timeout={500} className="" style={employeeStyle}> 
                            <EmployeeItem  employee={employee}/>
                        </CSSTransition>
                    ))
                : employees.map(employee => (
                    <CSSTransition key={employee._id} timeout={500} className="" style={employeeStyle}> 
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

const employeeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Employees

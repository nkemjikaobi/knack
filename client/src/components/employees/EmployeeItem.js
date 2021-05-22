import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import employeeContext from '../../context/employee/employeeContext'

const EmployeeItem = ({ employee }) => {

    const EmployeeContext = useContext(employeeContext);
    const { setCurrent } = EmployeeContext;

        return (
            //I would have destructured, but since I am calling the setCurrent function that has employee as a parameter, it was not possible.
            <div className='card text-center mt-4'>
                <h3>{employee.firstname + ' ' + employee.lastname }</h3>
                <p style={paragraphColor}><b>Email:</b> {employee.email}</p>
                <p style={paragraphColor}><b>Dept:</b> {employee.department}</p>
                <p style={paragraphColor}><b>Role:</b> {employee.role}</p>
                <div>
                    <button className={`btn ${employee.isAvailable ? 'green' : 'red'} btn-sm my-1`}>
                        {employee.isAvailable ? 'Available' : 'Occupied'}    {employee.isAvailable ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times"></i>}
                    </button>
                    <a href="#schedule-meeting-modal" type="button" onClick={() => setCurrent(employee)} className={`btn blue btn-sm my-1 modal-trigger meeting`} disabled={!employee.isAvailable}>{employee.isAvailable ? 'Schedule Meeting' : 'Cannot Schedule'} <i className="far fa-calendar-alt"></i></a>
                </div>
            </div>
        )
}

const paragraphColor = {
        color: 'gray'
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired,
    setCurrent: PropTypes.func,
}

export default EmployeeItem

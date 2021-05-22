import React from 'react'
import PropTypes from 'prop-types'

const EmployeeItem = ({ employee: { firstname, lastname, email, department, role, isAvailable} }) => {

        return (
            <div className='card text-center mt-4'>
                <h3>{firstname + ' ' + lastname }</h3>
                <p style={paragraphColor}><b>Email:</b> {email}</p>
                <p style={paragraphColor}><b>Dept:</b> {department}</p>
                <p style={paragraphColor}><b>Role:</b> {role}</p>
                <div>
                    <button className={`btn ${isAvailable ? 'btn-success' : 'btn-danger'} btn-sm my-1`}>{isAvailable ? 'Available' : 'Occupied'}</button>
                    <button type="button" className={`btn btn-dark btn-sm my-1 `} disabled={!isAvailable}>{isAvailable ? 'Schedule Meeting' : 'Cannot Schedule Meeting'}</button>
                </div>
            </div>
        )
}

const paragraphColor = {
        color: 'gray'
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired,
}

export default EmployeeItem

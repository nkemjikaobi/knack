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
                    <a href="#schedule-meeting-modal" className={`btn ${isAvailable ? 'green' : 'red'} btn-sm my-1 meeting modal-trigger`}>
                        {isAvailable ? 'Available' : 'Occupied'}    {isAvailable ? <i class="fas fa-check-circle"></i> : <i class="fas fa-times"></i>}
                    </a>
                    <button type="button" className={`btn blue btn-sm my-1 `} disabled={!isAvailable}>{isAvailable ? 'Schedule Meeting' : 'Cannot Schedule'} <i class="far fa-calendar-alt"></i></button>
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

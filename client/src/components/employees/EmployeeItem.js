import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const EmployeeItem = ({ employee: { firstname, lastname, email, department, role, isAvailable} }) => {

        return (
            <div className='card text-center mt-4'>
                <h3>{firstname + ' ' + lastname }</h3>
                <p>Email {email}</p>
                <p>Dept {department}</p>
                <p>Role {role}</p>
                <div>
                    <Link to={`/user/}`} className='btn btn-dark btn-sm my-1'>More... </Link>
                    <button className={`btn ${isAvailable ? 'btn-success' : 'btn-danger'} btn-sm my-1`}>{isAvailable ? 'Available' : 'Occupied'}</button>
                </div>
            </div>
        )
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired,
}

export default EmployeeItem

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon,title }) => {

        return (
            <nav className='navbar bg-primary'>
                <h1>
                   <i className = { icon }/> { title }
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
        )
}


Navbar.defaultProps = {
    icon:'fab fa-canadian-maple-leaf',
    title: 'Knack'
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Navbar

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon,title}) => {

        return (
            <div className="navbar-fixed">
                <nav style={navBgColor}>
                    <div className="nav-wrapper ml-5">
                        <a href="!#" className="brand-logo"><i className = {`fab ${icon}`}/> { title }</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
}

const navBgColor = {
    backgroundColor: '#003699'
}
Navbar.defaultProps = {
    icon:'fa-canadian-maple-leaf',
    title: 'Knack'
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default Navbar

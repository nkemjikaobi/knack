import React,{ Fragment } from 'react'
import Search from '../employees/Search';
import Employees from '../employees/Employees';

const Home = () => {
    return (
        <Fragment>
            <Search/>
            <Employees />
        </Fragment>
    )
}

export default Home
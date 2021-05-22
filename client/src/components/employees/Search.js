import React, { useState, useContext } from 'react'
import employeeContext from '../../context/employee/employeeContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const EmployeeContext = useContext(employeeContext);
    const alertContext = useContext(AlertContext);
    const [ text, setText ] = useState('')

   const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please enter something','light');
        }
        else{
            EmployeeContext.searchUsers(text)
            setText('');
        }
    }
   const onChange = e => setText(e.target.value );
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name='text' placeholder='Search Users...' value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className='btn btn-block btn-dark'/>
                </form>
                {EmployeeContext.users.length > 0 && (
                    <button onClick={EmployeeContext.clearUsers} className='btn btn-block btn-light'>Clear</button>
                )}

            </div>
        )
}

export default Search

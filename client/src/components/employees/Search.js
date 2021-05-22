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
                <form onSubmit={onSubmit} className="form mb-4">
                    <div className="row">
                        <div className="col md-3">
                            <input type="text" classNamw="mr-auto" name='text' placeholder='Search Employees...' value={text} onChange={onChange} />
                            {/* <i class="fas fa-search"></i> */}
                        </div>
                        <div className="col md-4">
                            {/* <label htmlFor="inputGroupSelect04">Sort By:</label> */}
                            <select className="custom-select mt-4 " id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Sort By</option>
                                <option value="1">Department</option>
                                <option value="2">Role</option>
                                <option value="3">Firstname</option>
                                <option value="3">Lastname</option>
                            </select>
                        </div>
                    </div>   
                </form>
            </div>
        )
}

export default Search

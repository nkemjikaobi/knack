import React, { useEffect, useContext, useRef } from 'react'
import employeeContext from '../../context/employee/employeeContext'

const Search = () => {
    const EmployeeContext = useContext(employeeContext);
    const { filterEmployees, clearFilter, filtered } = EmployeeContext;
    const text = useRef('');
    console.log(text.current.value);
  
    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = (e) => {
        if(text.current.value !== ''){
            filterEmployees(e.target.value);
        }
        else{
           clearFilter(); 
        }
    }
        return (
            <div>
                <form className="form mb-4 mt-4">
                    <div className="row">
                        <div className="input-field col-md-6 col-sm-12">
                            <input id="search" type="text" placeholder='Filter Employees by name, email, role, dept' required ref={text} onChange={onChange}/>
                        </div>
                        <div className="input-field col-md-6 col-sm-12 col s12">
                            <select>
                            <option value="" selected>All</option>
                            <option value="1">Role</option>
                            <option value="2">Department</option>
                            <option value="3">Name</option>
                            </select>
                            <label>Sort By</label>
                        </div>
                    </div>   
                </form>
            </div>
        )
}

export default Search

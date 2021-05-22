import React, { useEffect, useContext, useRef } from 'react'
import employeeContext from '../../context/employee/employeeContext'
import AlertContext from '../../context/alert/alertContext'

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
                <form className="form mb-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                        {/* <label className="label-icon" htmlFor="search"><i class="fas fa-search"></i></label> */}
                            <input type="text" className="mr-auto" name='text' placeholder='Filter Employees by name, email, role, dept' ref={text} onChange={onChange} />
                            {/* <i class="fas fa-search"></i> */}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            {/* <label htmlFor="inputGroupSelect04">Sort By:</label> */}
                            <select className="custom-select mt-4 " id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option >Sort By</option>
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

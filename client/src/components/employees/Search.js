import React, { useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import employeeContext from '../../context/employee/employeeContext'

const Search = () => {
    const EmployeeContext = useContext(employeeContext);
    const { filterEmployees, clearFilter, filtered } = EmployeeContext;
    const text = useRef('');
  
    //When component mounts
    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })

    //Monitor changes on the search bar
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
                        <div className="input-field col-md-12 col-sm-12">
                            <input id="search" type="text" 
                                placeholder='Filter by name, email, role, dept' required ref={text} onChange={onChange}
                            />
                        </div>
                    </div>   
                </form>
            </div>
        )
}

Search.propTypes = {
    filterEmployees: PropTypes.func,
    clearFilter: PropTypes.func,
    filtered: PropTypes.object,
}


export default Search

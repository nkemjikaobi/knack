import React, { useState, useContext , useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import employeeContext from '../../context/employee/employeeContext'

const ScheduleMeetingModal = () => {

    const EmployeeContext = useContext(employeeContext);
    const { current } = EmployeeContext;


    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    useEffect(() => {
        if(current){
            setfirstName(current.firstName);
            setlastName(current.lastName);
        }
    },[current])

    const onSubmit = () => {
        if(title === '' || date === ''){
            M.toast({ html: 'Please enter the title and date'});
        }
        else{
            // const newTech = {
            //     firstName,
            //     lastName
            // }

            // addTech(newTech);
            M.toast({ html: `Meeting Schdeuled for ${date}`})

            //Clear fields
            setTitle('');
            setDate('');
        }

    }

        return (
            <div id='schedule-meeting-modal' className='modal'>
                <div className="modal-content">
                    <h4>Schedule Meeting with {firstName} {lastName}</h4>
                    
                        <div className="input-field col-md-12 col-sm-12">
                            <input type="text"
                             name='title'
                             value={title}
                             placeholder= "Annual Budget for Knack"
                              onChange={e => setTitle(e.target.value)}/>
                              <label htmlFor="title" className='active'>
                                  Title
                              </label>
                        </div>
                    
                   
                        <div className="input-field col-md-12 col-sm-12 datepicker">
                            <input type="text"
                             name='date'
                             value={date}
                              onChange={e => setDate(e.target.value)}/>
                              <label htmlFor="date" className='active'>
                                  Date
                              </label>
                        </div>
                </div>
                <div className="modal-footer">
                    <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className='modal-close waves-effect blue waves-light btn'>
                        Create Meeting
                    </a>
                </div>
            </div>
        )
        
}
ScheduleMeetingModal.propTypes = {
    current: PropTypes.object,
}

export default ScheduleMeetingModal

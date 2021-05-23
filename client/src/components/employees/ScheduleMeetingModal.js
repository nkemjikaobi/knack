import React, { useState, useContext , useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import employeeContext from '../../context/employee/employeeContext'

const ScheduleMeetingModal = () => {

    const EmployeeContext = useContext(employeeContext);
    const { current } = EmployeeContext;


    //For the Modal form
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    useEffect(() => {

        if(current){
            setfirstName(current.firstName);
            setlastName(current.lastName);
        }
        
    },[current])
    
    const onSubmit = () => {
        if(title === '' || date === '' || time === ''){
            M.toast({ html: 'Please all fields are required'});
        }
        else{
            
            //PS: There is no persisted data change such as (setting the availability of the employee to occupied) as an API would have to be created.
            M.toast({ html: `Meeting with ${firstName} ${lastName} Schdeuled for ${date} from ${time}`})

            //Clear fields
            setTitle('');
            setDate('');
        }

    }

        return (
            <div id='schedule-meeting-modal' className='modal'>
                <form action="" method="post">
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
                        
                    
                            <div className="input-field col-md-12 col-sm-12 ">
                                <input type="date"
                                name='date'
                                value={date}
                                onChange={e => setDate(e.target.value)}/>
                                <label htmlFor="date" className='active'>
                                    Date
                                </label>
                            </div>
                            
                            <div className="input-field col-md-12 col-sm-12">
                                <input type="text"
                                placeholder="10:00 - 10:30"
                                name='time'
                                value={time}
                                onChange={e => setTime(e.target.value)}/>
                                <label htmlFor="time" className='active'>
                                        Time
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
                </form>
            </div>
        ) 
}
ScheduleMeetingModal.propTypes = {
    current: PropTypes.object,
}

export default ScheduleMeetingModal

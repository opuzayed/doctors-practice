import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';

const AvailableAppoints = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className ='mt-16'>
            <p className='text-center text-secondary font-bold '>Available appointment on {format(selectedDate, 'PP')}</p>
            <div>
                {
                    appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppoints;
import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-primary">{name}</h2>
        <p>{slots.length>0 ? slots[0] : 'Try another day'}</p>
        <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary text-white">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

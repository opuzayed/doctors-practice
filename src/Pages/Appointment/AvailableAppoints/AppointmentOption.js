import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length>0 ? slots[0] : 'Try another day'}</p>
        <div className="card-actions">
          <button className="btn btn-primary text-white">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

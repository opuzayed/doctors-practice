import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from './../../../Components/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{background:`url(${appointment})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=''
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h3 className="text-primary font-bold">Appointment</h3>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
            Gymglish has allowed me to improve my oral and written expression. A daily routine I wouldn't miss for anything in the world!Gymglish has allowed me to improve my oral and written expression. A daily routine I wouldn't miss for anything in the world!
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppoints = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const {data:appointmentOptions=[]} = useQuery({ queryKey: ['appointmentOptions'], 
            queryFn: async () =>  {
              const res = await fetch('http://localhost:5000/appointmentOptions');
              const data = await res.json();
              return data;
            }})

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold ">
        Available appointment on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}
      setTreatment={setTreatment}
      selectedDate={selectedDate}
      ></BookingModal>}
    </section>
  );
};

export default AvailableAppoints;

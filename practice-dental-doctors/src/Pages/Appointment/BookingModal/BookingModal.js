import React from "react";
import { format } from 'date-fns';

const BookingModal = ({treatment,setTreatment,selectedDate}) => {
    const {name, slots} = treatment;
    const handleBooking = event => {
            event.preventDefault();
            const form = event.target;
            const slot = form.slot.value;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;

            const booking ={
                appointmentDate : format(selectedDate, 'PP'),
                treatment:name,
                patientName:name,
                slot,
                email,
                phone
            }
            console.log(booking);
            setTreatment(null);
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form onSubmit = {handleBooking} className="grid grid-cols-1 gap-2 mt-4">
            <input type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full" />
            <select name='slot' className="select select-bordered w-full">
                {
                    slots.map((slot,i) =><option value = {slot} key={i}>{slot}</option>)
                }
            </select>
            <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input name = 'email' type="text" placeholder="Email Address" className="input input-bordered w-full" />
            <input name = 'phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
            <br />
            <input type="submit" className="btn btn-accent w-full" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

import React from "react";
import { format } from 'date-fns';

const BookingModal = ({treatment,selectedDate}) => {
    const {name} = treatment;
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
          <form className="grid grid-cols-1 gap-2 mt-4">
            <input type="text" value={format(selectedDate, 'PP')} className="input input-bordered w-full" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <br />
            <input type="submit" className="btn btn-accent w-full" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

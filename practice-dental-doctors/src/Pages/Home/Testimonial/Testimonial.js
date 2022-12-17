import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id : 1,
            name:'Halum',
            img:people1,
            clientReview:'Oh, and the button feel is next level. The volume knobs, infotainment dial and climate controls are all extremely premium in their operation. The ‘click’ of the climate control dials alone was enough to make the CX-8 stand out as a car that’s been even better than its European rivals, like the Skoda Kodiaq',
            location:'Dhaka'
        },
        {
            _id : 2,
            name:'Dalum',
            img:people2,
            clientReview:'Oh, and the button feel is next level. The volume knobs, infotainment dial and climate controls are all extremely premium in their operation. The ‘click’ of the climate control dials alone was enough to make the CX-8 stand out as a car that’s been even better than its European rivals, like the Skoda Kodiaq',
            location:'Dhaka'
        },
        {
            _id : 3,
            name:'Malum',
            img:people3,
            clientReview:'Oh, and the button feel is next level. The volume knobs, infotainment dial and climate controls are all extremely premium in their operation. The ‘click’ of the climate control dials alone was enough to make the CX-8 stand out as a car that’s been even better than its European rivals, like the Skoda Kodiaq',
            location:'Dhaka'
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-4xl'>What Our Patient Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=''></img>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key = {review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
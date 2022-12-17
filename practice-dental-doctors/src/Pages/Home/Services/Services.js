import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const serviceData = [
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay',
            img:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay',
            img:whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-xl uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
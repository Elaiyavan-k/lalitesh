
import React from 'react';
import { AirPlaneIcon, ShipIcon, TruckIcon, WarehouseIcon, CustomsIcon } from '../components/IconComponents';

const services = [
  {
    name: 'Air Freight',
    description: 'When speed is paramount, our global air freight services provide reliable and timely delivery for your high-priority shipments. We offer flexible options to meet your specific needs.',
    icon: <AirPlaneIcon className="h-10 w-10 text-primary" />,
  },
  {
    name: 'Ocean Freight',
    description: 'Cost-effective and dependable ocean freight solutions for your large, heavy, or non-urgent shipments. We manage both Full Container Load (FCL) and Less than Container Load (LCL).',
    icon: <ShipIcon className="h-10 w-10 text-primary" />,
  },
  {
    name: 'LTL & FTL Trucking',
    description: 'Comprehensive ground transportation services across the country. Whether you need a Full Truckload (FTL) or Less-Than-Truckload (LTL), we have you covered.',
    icon: <TruckIcon className="h-10 w-10 text-primary" />,
  },
  {
    name: 'Warehousing & Distribution',
    description: 'Our secure, strategically located warehouses provide storage, inventory management, and distribution services to streamline your supply chain and reduce costs.',
    icon: <WarehouseIcon className="h-10 w-10 text-primary" />,
  },
  {
    name: 'Customs Clearance',
    description: 'Navigating international trade regulations can be complex. Our expert customs brokers ensure your shipments clear customs smoothly and without delays.',
    icon: <CustomsIcon className="h-10 w-10 text-primary" />,
  },
  {
    name: 'Supply Chain Management',
    description: 'We offer end-to-end supply chain solutions, from planning and procurement to logistics and delivery, optimizing your operations for maximum efficiency.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Logistics Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We provide a comprehensive range of services to meet your every shipping and supply chain need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

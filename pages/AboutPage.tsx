
import React from 'react';

const stats = [
    { label: 'Countries Served', value: '150+' },
    { label: 'Shipments Annually', value: '2 Million+' },
    { label: 'Years of Experience', value: '25' },
    { label: 'Customer Satisfaction', value: '99.7%' },
];

const timeline = [
    { year: '1998', event: 'SwiftShip Founded', description: 'Started as a local courier service with a single truck and a big vision.' },
    { year: '2005', event: 'National Expansion', description: 'Expanded operations to cover all 50 states with a growing fleet.' },
    { year: '2012', event: 'International Services', description: 'Launched air and ocean freight services, connecting the US to global markets.' },
    { year: '2020', event: 'Tech Integration', description: 'Rolled out our advanced real-time tracking and logistics management platform.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">About SwiftShip Logistics</h1>
          <p className="mt-4 text-xl text-gray-300">The driving force behind global commerce.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="https://picsum.photos/800/600?random=1" alt="Team discussing logistics" className="rounded-lg shadow-xl" />
            </div>
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                    <p className="mt-2 text-lg text-gray-600">To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to thrive in a global marketplace. We are committed to excellence in service and building lasting partnerships with our clients.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                    <p className="mt-2 text-lg text-gray-600">To be the world's most trusted and efficient logistics provider, setting the industry standard for customer satisfaction, technological advancement, and sustainable practices.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
       <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl md:text-5xl font-extrabold text-primary">{stat.value}</p>
                            <p className="mt-1 text-lg font-medium text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
                {timeline.map((item, index) => (
                    <div key={item.year} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5/12"></div>
                        <div className="z-10 flex items-center bg-primary p-3 rounded-full shadow-lg">
                           <span className="text-white font-bold text-lg">{item.year}</span>
                        </div>
                        <div className="w-5/12 bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-secondary">{item.event}</h3>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

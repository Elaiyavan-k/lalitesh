
import React from 'react';
import { Link } from 'react-router-dom';
import { AirPlaneIcon, ShipIcon, TruckIcon, ChevronRightIcon } from '../components/IconComponents';

const testimonials = [
  {
    quote: "SwiftShip has revolutionized our supply chain. Their reliability and customer service are second to none. We trust them with our most critical shipments.",
    name: "John Doe",
    company: "CEO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The tracking system is incredibly accurate, giving us peace of mind. Their team is always proactive in communication. Highly recommended!",
    name: "Jane Smith",
    company: "Logistics Manager, Tech Corp.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "From customs clearance to final delivery, SwiftShip handles everything flawlessly. Their expertise in international shipping is a huge asset.",
    name: "Samuel Green",
    company: "Operations Director, Global Goods",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
];

const services = [
    { name: 'Air Freight', icon: <AirPlaneIcon className="w-10 h-10 text-primary" />, description: 'Fast and reliable air cargo services for your time-sensitive shipments.' },
    { name: 'Ocean Freight', icon: <ShipIcon className="w-10 h-10 text-primary" />, description: 'Cost-effective sea freight solutions for large and bulk shipments worldwide.' },
    { name: 'Road Freight', icon: <TruckIcon className="w-10 h-10 text-primary" />, description: 'Comprehensive domestic and cross-border trucking services (FTL & LTL).' },
];

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-slideUp">Connecting Your World, Seamlessly.</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 animate-slideUp animation-delay-300">Global logistics and transportation services tailored to your business needs. Reliable, efficient, and on time.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slideUp animation-delay-500">
            <Link to="/quote" className="bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Quote
            </Link>
            <Link to="/tracking" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-lg">
              Track Your Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Services</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We offer a full spectrum of logistics services to meet your needs.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {services.map(service => (
                    <div key={service.name} className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 mb-6">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="mt-2 text-base text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300">
                    Explore All Services <ChevronRightIcon className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">We are proud to have the trust of businesses worldwide.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default HomePage;

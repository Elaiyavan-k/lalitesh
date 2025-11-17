
import React from 'react';
import { Link } from 'react-router-dom';
import { ShipIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center text-white">
              <ShipIcon className="h-8 w-8 text-accent" />
              <span className="ml-3 text-xl font-bold">SwiftShip</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">Your reliable partner in global logistics. Delivering excellence, one shipment at a time.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-base text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Tools</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/quote" className="text-base text-gray-400 hover:text-white">Get a Quote</Link></li>
              <li><Link to="/tracking" className="text-base text-gray-400 hover:text-white">Track Shipment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-base">
                <li>123 Shipping Lane,</li>
                <li>Logistics City, 10001</li>
                <li className='pt-2'>contact@swiftship.com</li>
                <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} SwiftShip Logistics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons Placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

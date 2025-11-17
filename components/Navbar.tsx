
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShipIcon } from './IconComponents';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
    { to: '/about', text: 'About Us' },
    { to: '/contact', text: 'Contact' },
  ];

  const linkClass = "text-white hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClass = "text-accent bg-white/10";

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center text-white">
              <ShipIcon className="h-8 w-8 text-accent" />
              <span className="ml-3 text-xl font-bold">SwiftShip</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
                >
                  {link.text}
                </NavLink>
              ))}
              <Link to="/quote" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-primary bg-accent hover:bg-yellow-400 transition-all duration-300 shadow">
                Get a Quote
              </Link>
              <Link to="/tracking" className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-secondary hover:bg-blue-600 transition-all duration-300 shadow">
                Track Shipment
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${linkClass} ${isActive ? activeLinkClass : ''}`}
              >
                {link.text}
              </NavLink>
            ))}
             <Link to="/quote" onClick={() => setIsOpen(false)} className="block mt-4 w-full text-center px-4 py-2 rounded-md text-base font-medium text-primary bg-accent hover:bg-yellow-400 transition-all duration-300 shadow">
                Get a Quote
              </Link>
              <Link to="/tracking" onClick={() => setIsOpen(false)} className="block mt-2 w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-secondary hover:bg-blue-600 transition-all duration-300 shadow">
                Track Shipment
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

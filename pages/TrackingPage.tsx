
import React, { useState } from 'react';

const mockTrackingData: { [key: string]: any } = {
  "SW123456789": {
    status: "In Transit",
    origin: "Los Angeles, CA",
    destination: "New York, NY",
    updates: [
      { status: "Delivered", location: "New York, NY", date: "2023-10-28 11:45 AM", current: true },
      { status: "Out for Delivery", location: "New York, NY", date: "2023-10-28 08:30 AM", current: false },
      { status: "Arrived at Hub", location: "New York, NY", date: "2023-10-28 02:15 AM", current: false },
      { status: "In Transit", location: "Chicago, IL", date: "2023-10-26 09:00 PM", current: false },
      { status: "Picked Up", location: "Los Angeles, CA", date: "2023-10-25 04:30 PM", current: false },
      { status: "Label Created", location: "Los Angeles, CA", date: "2023-10-25 10:00 AM", current: false },
    ]
  },
  "SW987654321": {
      status: "Delivered",
      origin: "Miami, FL",
      destination: "Seattle, WA",
      updates: [
        { status: "Delivered", location: "Seattle, WA", date: "2023-11-05 01:20 PM", current: true },
        { status: "Out for Delivery", location: "Seattle, WA", date: "2023-11-05 08:00 AM", current: false },
        { status: "In Transit", location: "Denver, CO", date: "2023-11-03 11:10 PM", current: false },
        { status: "Picked Up", location: "Miami, FL", date: "2023-11-01 02:00 PM", current: false },
      ]
  }
};

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTrackingInfo(null);
    setLoading(true);

    setTimeout(() => {
        const data = mockTrackingData[trackingNumber.toUpperCase()];
        if (data) {
            setTrackingInfo(data);
        } else {
            setError("Tracking number not found. Please check the number and try again. (Hint: try SW123456789 or SW987654321)");
        }
        setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Track Your Shipment</h1>
          <p className="mt-4 text-lg text-gray-600">Enter your tracking number (AWB/BOL) to see the latest status.</p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input 
              type="text" 
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="flex-grow block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <button type="submit" disabled={loading} className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
              {loading ? (
                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Track'}
            </button>
          </form>
        </div>

        {error && <p className="mt-4 text-center text-red-600">{error}</p>}

        {trackingInfo && (
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
            <div className="pb-6 border-b border-gray-200 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Shipment Status: <span className="text-primary">{trackingInfo.status}</span></h2>
                <div className="mt-2 text-gray-600 flex flex-col md:flex-row justify-between">
                    <p><strong>Tracking #:</strong> {trackingNumber.toUpperCase()}</p>
                    <p><strong>Route:</strong> {trackingInfo.origin} to {trackingInfo.destination}</p>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">History</h3>
                <div className="flow-root">
                <ul className="-mb-8">
                    {trackingInfo.updates.map((update: any, index: number) => (
                    <li key={index}>
                        <div className="relative pb-8">
                        {index !== trackingInfo.updates.length - 1 ? (
                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        ) : null}
                        <div className="relative flex space-x-3">
                            <div>
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${update.current ? 'bg-primary' : 'bg-gray-400'}`}>
                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                                <p className="text-sm text-gray-800 font-medium">{update.status}</p>
                                <p className="text-sm text-gray-500">{update.location}</p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time>{update.date}</time>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default TrackingPage;

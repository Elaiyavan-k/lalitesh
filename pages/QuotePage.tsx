
import React, { useState } from 'react';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    length: '',
    width: '',
    height: '',
  });

  const [quote, setQuote] = useState<{ cost: number; time: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setQuote(null);
    
    setTimeout(() => {
      const { weight, length, width, height } = formData;
      const baseRate = 50;
      const weightFactor = parseFloat(weight) * 0.5;
      const dimWeight = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 5000;
      const finalWeight = Math.max(parseFloat(weight), dimWeight);
      const cost = baseRate + (finalWeight * 2.5);

      const deliveryTime = Math.floor(Math.random() * 5) + 3; // Random 3-7 days

      setQuote({
        cost: Math.round(cost * 100) / 100,
        time: `${deliveryTime}-${deliveryTime + 2} business days`,
      });
      setLoading(false);
    }, 1500); // Simulate API call
  };
  
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Get an Instant Quote</h1>
          <p className="mt-4 text-lg text-gray-600">Fill in the details below to get an estimated shipping cost and delivery time.</p>
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900">Shipment Details</h3>
            </div>
            
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
              <input type="text" name="origin" id="origin" required placeholder="e.g., New York, NY" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
              <input type="text" name="destination" id="destination" required placeholder="e.g., Los Angeles, CA" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input type="number" name="weight" id="weight" required placeholder="5" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-gray-700">Length (cm)</label>
                <input type="number" name="length" id="length" required placeholder="30" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700">Width (cm)</label>
                <input type="number" name="width" id="width" required placeholder="20" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input type="number" name="height" id="height" required placeholder="15" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
            </div>

            <div className="md:col-span-2 text-right">
              <button type="submit" disabled={loading} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary bg-accent hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400">
                {loading ? 'Calculating...' : 'Calculate Quote'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
            <div className="mt-8 text-center">
                 <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                 <p className="text-gray-600 mt-2">Finding the best rates for you...</p>
            </div>
        )}
        
        {quote && (
          <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded-lg shadow-md animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900">Your Estimated Quote</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-lg">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Estimated Cost</span>
                    <span className="font-bold text-primary text-3xl">${quote.cost.toFixed(2)}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Estimated Delivery Time</span>
                    <span className="font-semibold text-gray-800">{quote.time}</span>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">*This is an estimate. Actual cost and delivery time may vary.</p>
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

export default QuotePage;

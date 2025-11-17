
import React from 'react';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        // Here you would typically handle form submission, e.g., send data to a server
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Have questions or need a custom solution? Our team is here to help.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-primary">Our Address</h3>
                            <p className="mt-2 text-gray-600">
                                123 Shipping Lane<br />
                                Logistics City, LC 10001<br />
                                United States
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-primary">Email Us</h3>
                            <a href="mailto:contact@swiftship.com" className="mt-2 text-gray-600 hover:text-primary transition">
                                contact@swiftship.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-primary">Call Us</h3>
                            <p className="mt-2 text-gray-600">(123) 456-7890</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" name="name" id="name" required placeholder="Your Name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" required placeholder="Your Email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" rows={4} required placeholder="Your Message" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-primary bg-accent hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Location</h2>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618035252119!2d-73.9878440845941!3d40.74844097932785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a4b3f5a3%3A0x863a32f7a837c7c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633456789012!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Company Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

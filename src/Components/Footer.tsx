import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-medium mb-4">QuickStart</h3>
          <p className="mb-2">A108 Adam Street</p>
          <p className="mb-2">New York, NY 535022</p>
          <p className="mb-2">Phone: +1 5589 55488 55</p>
          <p>Email: info@example.com</p>
        </div>
        
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-500">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Our Services */}
        <div>
          <h3 className="text-lg font-medium mb-4">Our Services</h3>
          <ul className="space-y-2">
            {['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'].map((service, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-500">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-medium mb-4">Our Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 border border-gray-700 text-white flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} QuickStart. All Rights Reserved</p>
        <p>Designed by BootstrapMade DistThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;

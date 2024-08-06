import React, { useState } from 'react';

function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-5  flex justify-between items-center">
        <div className="text-3xl font-bold text-orange-500">YourLogo</div>
        <div className="space-x-8">
          <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">Home</a>
          <div 
            className="relative inline-block"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-600 hover:text-orange-500 text-xl flex items-center">
              Products
              <svg
                className={`ml-1 transition-transform duration-200 ${
                  hoveredItem === 'products' ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {hoveredItem === 'products' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product 3</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">Services</a>
          <div 
            className="relative inline-block"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-600 hover:text-orange-500 text-xl flex items-center">
              Company
              <svg
                className={`ml-1 transition-transform duration-200 ${
                  hoveredItem === 'company' ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {hoveredItem === 'company' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Careers</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Partners</a>
              </div>
            )}
          </div>
          
          <a href="#" className="text-gray-600 hover:text-orange-500 text-xl">Blog</a>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">Contact Us</a>
          <button className="bg-red-500 text-white px-2 py-2 rounded-md text-xl font-semibold">Get  A Demo</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

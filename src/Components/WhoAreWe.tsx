import React from 'react';
import logo from '../assets/about-company-1.jpg';
import logo2 from '../assets/about-company-2.jpg';
import logo3 from '../assets/about-company-3.jpg';

const WhoWeAreSection = () => {
  const features = [
    "Instant notifications to keep you informed.",
    "Reliable message delivery without delays.",
    "User-friendly interface for seamless communication."
  ];

  const clients = [
    { name: 'MYOB', logo: '../assets/logo1.png' },
    { name: 'Belimo', logo: '../assets/belimo.png' },
    { name: 'LifeGroups', logo: '../assets/lifegroups.png' },
    { name: 'Grabyo', logo: '../assets/grabyo.png' },
    { name: 'Citrus', logo: '../assets/citrus.png' },
    { name: 'Trustly', logo: '../assets/trustly.png' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-600 font-semibold text-sm">WHO WE ARE</span>
              <div className="h-1 w-16 bg-blue-600 mt-1"></div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Empowering Communication with K.ALERT
            </h2>
            
            <p className="text-gray-700 text-lg">
              K.ALERT is a powerful SMS messaging system designed to keep you connected and informed at all times.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg 
                      className="w-3 h-3 text-blue-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 group">
              Learn More
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
         
          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={logo} 
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105" 
            />
            <img 
              src={logo2} 
              alt="Creative workspace"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105" 
            />
            <img 
              src={logo3} 
              alt="Innovative ideas"
              className="col-span-2 w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105" 
            />
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-75">
            {clients.map((client) => (
              <div 
                key={client.name}
                className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

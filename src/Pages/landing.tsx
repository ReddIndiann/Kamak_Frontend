import React from 'react';
import image from '../assets/2678135.jpg';
import Header from '../Components/Header';
import WhoWeAreSection from '../Components/WhoAreWe';
import ServicesSection from '../Components/Services';
import Footer from '../Components/Footer';
import FAQSection from '../Components/FAQs';
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Dropdown', href: '#' },
  { label: 'Contact', href: '#' },
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
    className="min-h-screen bg-gradient-to-br from-blue-50 to-white"
    style={{
      backgroundImage: "url('/assets/hero-bg-light.webp')", // Starts with a leading '/'
    }}
  >
  
      {/* Navigation */}
      <Header navItems={navItems} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-8 lg:pt-20 pb-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Right side - Logo Image */}
        <div className="lg:w-1/2 mt-3 lg:order-2">
          <img src={image} width={1000} height={900} alt="QuickStart Logo" className="mx-auto lg:mr-auto" />
        </div>

        {/* Left side - Text content */}
        <div className="lg:w-1/2 text-center mb-12 lg:mb-0 lg:text-left lg:order-1">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Welcome to <span className="text-blue-400">K.ALERT</span>
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Quickly start your project now and set the stage for success
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-700 border border-gray-000 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
      <WhoWeAreSection/>
      <ServicesSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default LandingPage;

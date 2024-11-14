import React from 'react';
import logo from '../assets/logo1.png';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ navItems, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} width={100} height={100} alt="QuickStart Logo" className="mx-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

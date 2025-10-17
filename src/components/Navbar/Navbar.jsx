import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/custom', label: 'Custom Design' },
    { to: '/bulk', label: 'Bulk Orders' },
    { to: '/about', label: 'About' }
  ];

  return (
    <>
      <nav className={`fixed w-full text-white z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-gray-800 shadow-lg' : 'bg-black border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform">
              STREET.<span className="text-red-500">MONARCH</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="hover:text-red-500 transition hover:scale-110 transform">
                  {link.label}
                </Link>
              ))}
              <button className="bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition font-semibold hover:scale-105 transform hover:shadow-lg hover:shadow-red-500/50">
                Start Design
              </button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl z-50">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/70 z-40 md:hidden" />}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black to-gray-900 border-l border-red-500/30 shadow-2xl z-50 md:hidden transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="pt-8 pb-6 px-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white">
              STREET.<span className="text-red-500">MONARCH</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsOpen(false)} 
                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-all hover:translate-x-2 transform border-l-2 border-transparent hover:border-red-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-800">
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-full bg-red-500 text-white px-6 py-4 rounded-full hover:bg-red-600 transition font-bold hover:scale-105 transform shadow-lg hover:shadow-red-500/50"
            >
              Start Design
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

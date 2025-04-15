
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neuron-dark/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-neuron-accent to-neuron-primary flex items-center justify-center text-white font-bold text-xl">N</div>
            <div>
              <h1 className="font-bold text-xl text-white">NEURON</h1>
              <p className="text-xs text-gray-300">AI & Robotics</p>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-neuron-light transition-colors">Home</a>
            <a href="#courses" className="text-white hover:text-neuron-light transition-colors">Courses</a>
            <a href="#about" className="text-white hover:text-neuron-light transition-colors">About Us</a>
            <a href="#products" className="text-white hover:text-neuron-light transition-colors">Products</a>
            <a href="#contact" className="text-white hover:text-neuron-light transition-colors">Contact</a>
            <a href="#courses" className="bg-gradient-to-r from-neuron-primary to-neuron-accent text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-neuron-accent/20 transition-all">Join Courses</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-neuron-dark/95 rounded-lg p-4 animate-zoomin">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white py-2 hover:text-neuron-light transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#courses" className="text-white py-2 hover:text-neuron-light transition-colors" onClick={() => setIsMenuOpen(false)}>Courses</a>
              <a href="#about" className="text-white py-2 hover:text-neuron-light transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#products" className="text-white py-2 hover:text-neuron-light transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#contact" className="text-white py-2 hover:text-neuron-light transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#courses" className="bg-gradient-to-r from-neuron-primary to-neuron-accent text-white px-5 py-2 rounded-full font-medium text-center hover:shadow-lg hover:shadow-neuron-accent/20 transition-all" onClick={() => setIsMenuOpen(false)}>Join Courses</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

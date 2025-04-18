import { useState, useEffect } from 'react';
import { Menu, X, Brain, Cpu, CircuitBoard } from 'lucide-react';

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
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-neuron-accent via-neuron-primary to-neuron-secondary flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neuron-primary to-neuron-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex gap-1">
                <Brain className="w-4 h-4 text-white animate-pulse" />
                <Cpu className="w-4 h-4 text-white animate-pulse delay-100" />
                <CircuitBoard className="w-4 h-4 text-white animate-pulse delay-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NEURON
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-neuron-accent">AI</span>
                <span className="text-xs text-gray-400">&</span>
                <span className="text-xs font-medium text-neuron-light">Robotics</span>
              </div>
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


import { useState, useEffect } from 'react';
import { Menu, X, Brain, Cpu, CircuitBoard, Server, Layers, Activity } from 'lucide-react';

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
              
              {/* Animated network patterns */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-300"></div>
                <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-600"></div>
                <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-900"></div>
                <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-1200"></div>
              </div>
              
              {/* Main logo icons */}
              <div className="relative z-10 grid grid-cols-2 gap-1">
                <Brain className="w-4 h-4 text-white animate-pulse" />
                <Cpu className="w-4 h-4 text-white animate-pulse delay-100" />
                <Server className="w-4 h-4 text-white animate-pulse delay-200" />
                <CircuitBoard className="w-4 h-4 text-white animate-pulse delay-300" />
              </div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-neuron-accent opacity-30 blur-md animate-pulse"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-neuron-light group-hover:to-white transition-all duration-300">
                NEURON
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-neuron-accent group-hover:animate-pulse transition-all">AI</span>
                <span className="text-xs text-gray-400">&</span>
                <span className="text-xs font-medium text-neuron-light relative group-hover:animate-pulse">
                  Robotics
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neuron-accent group-hover:w-full transition-all duration-500"></span>
                </span>
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

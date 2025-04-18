
import { useState, useEffect } from 'react';
import { Menu, X, Brain, Cpu, CircuitBoard, Server, Layers, Activity, Rocket, Zap, Monitor } from 'lucide-react';

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
            <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-neuron-accent via-neuron-primary to-neuron-secondary flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neuron-primary to-neuron-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Dynamic circuit patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                  <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/30 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                  <div className="absolute top-[45%] left-[45%] w-[10%] h-[10%] bg-white rounded-full animate-ping"></div>
                  
                  {/* Circuit lines */}
                  <div className="absolute top-[20%] left-0 w-[80%] h-[1px] bg-white/20 animate-pulse"></div>
                  <div className="absolute top-[70%] left-[20%] w-[80%] h-[1px] bg-white/20 animate-pulse delay-100"></div>
                  <div className="absolute top-0 left-[30%] w-[1px] h-[70%] bg-white/20 animate-pulse delay-200"></div>
                  <div className="absolute top-[30%] left-[80%] w-[1px] h-[70%] bg-white/20 animate-pulse delay-300"></div>
                </div>
              </div>
              
              {/* Main logo icons - rotating 3D grid */}
              <div className="relative z-10 w-8 h-8 animate-[spin_10s_linear_infinite]">
                <div className="absolute grid grid-cols-2 gap-0.5">
                  <Brain className="w-3.5 h-3.5 text-white animate-pulse" />
                  <Cpu className="w-3.5 h-3.5 text-white animate-pulse delay-100" />
                  <Server className="w-3.5 h-3.5 text-white animate-pulse delay-200" />
                  <CircuitBoard className="w-3.5 h-3.5 text-white animate-pulse delay-300" />
                </div>
                <div className="absolute grid grid-cols-2 gap-0.5 rotate-[30deg]">
                  <Monitor className="w-3.5 h-3.5 text-white/70 animate-pulse delay-400" />
                  <Rocket className="w-3.5 h-3.5 text-white/70 animate-pulse delay-500" />
                  <Zap className="w-3.5 h-3.5 text-white/70 animate-pulse delay-600" />
                  <Activity className="w-3.5 h-3.5 text-white/70 animate-pulse delay-700" />
                </div>
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

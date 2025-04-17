import { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Brain, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorTheme } = useTheme();
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const colors = ['#7E69AB', '#D6BCFA', '#8B5CF6', '#6E59A5', '#9F7AEA'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      const floatDuration = Math.random() * 5 + 8;
      const pulseDuration = Math.random() * 3 + 2;
      particle.style.animationDuration = `${floatDuration}s, ${pulseDuration}s`;
      
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s, ${delay}s`;
      
      container.appendChild(particle);
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const themeColors = {
    red: {
      primary: '#ea384c',
      accent: '#ff4d63',
      light: '#ff6b7d'
    },
    yellow: {
      primary: '#ffd700',
      accent: '#ffed4a',
      light: '#fff4b4'
    },
    violet: {
      primary: '#9b87f5',
      accent: '#7c64f3',
      light: '#b4a6f7'
    }
  };

  const currentColors = themeColors[colorTheme];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-neuron-dark">
      <div 
        ref={containerRef} 
        className="particles-container"
        aria-hidden="true"
        style={{
          '--particle-color': currentColors.primary
        } as any}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.span 
                className="text-white block"
                variants={textVariants}
                custom={0}
              >
                Empowering Futures with
              </motion.span>
              <motion.span 
                className="text-gradient"
                variants={textVariants}
                custom={1}
                style={{
                  background: `linear-gradient(to right, ${currentColors.light}, ${currentColors.accent}, ${currentColors.primary})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                AI & Robotics Education
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Join Neuron AI & Robotics to learn cutting-edge skills from industry professionals. Our comprehensive courses and hands-on experience will prepare you for a successful career in technology.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="hero-button bg-gradient-to-r from-neuron-primary to-neuron-accent text-white shadow-lg shadow-neuron-accent/20">
                Explore Courses <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <a href="#about" className="hero-button bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                About Neuron
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neuron-primary/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-neuron-light" />
                </div>
                <p className="ml-3 text-white font-medium">Advanced Technology</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neuron-primary/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-neuron-light" />
                </div>
                <p className="ml-3 text-white font-medium">Expert Mentors</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neuron-primary/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-neuron-light" />
                </div>
                <p className="ml-3 text-white font-medium">Hands-on Learning</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{
                  background: `linear-gradient(to bottom right, ${currentColors.primary}, ${currentColors.accent})`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-neuron-primary to-neuron-accent rounded-full opacity-20 blur-3xl animate-pulse-soft"></div>
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neuron-primary to-neuron-accent rounded-full opacity-30"></div>
                  <div className="absolute inset-4 bg-neuron-dark rounded-full flex items-center justify-center">
                    <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-neuron-light to-neuron-primary">N</div>
                  </div>
                </div>
                <div className="absolute top-1/4 -left-4 w-20 h-20 bg-gradient-to-br from-neuron-accent to-neuron-primary rounded-2xl animate-float" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-gradient-to-tl from-neuron-primary to-neuron-light rounded-2xl animate-float" style={{ animationDelay: "1s" }}></div>
                <div className="absolute -bottom-2 left-1/3 w-14 h-14 bg-gradient-to-tr from-neuron-accent to-neuron-light rounded-lg animate-float" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

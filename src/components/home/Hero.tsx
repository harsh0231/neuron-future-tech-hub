
import { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Brain, Database } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeuronAnimation from './NeuronAnimation';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll-triggered fade effect
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
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
      
      // Use red/black theme colors for particles
      const colors = ['#ea384c', '#ff4d63', '#ff6b7d', 'rgba(234, 56, 76, 0.7)', 'rgba(0, 0, 0, 0.5)'];
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

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-neuron-dark">
      <div ref={containerRef} className="particles-container" aria-hidden="true"></div>
      
      <NeuronAnimation />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity, y }}
      >
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
                className="relative z-10"
                variants={textVariants}
                custom={1}
                style={{
                  background: 'linear-gradient(135deg, #ff6b7d 0%, #ea384c 50%, #c52938 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(234, 56, 76, 0.3)'
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
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

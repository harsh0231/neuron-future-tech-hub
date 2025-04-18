
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, ArrowRight } from 'lucide-react';

const testimonialsData = [
  {
    name: "Srinivas K.",
    role: "CEO, Tech Innovations Ltd",
    image: "/placeholder.svg",
    quote: "Neuron AI & Robotics has been instrumental in upskilling our engineering team. Their specialized training programs have significantly enhanced our product development capabilities.",
    company: "Tech Innovations Ltd"
  },
  {
    name: "Dr. Leela R.",
    role: "Principal, Delhi Public School",
    image: "/placeholder.svg",
    quote: "Implementing Neuron's tech courses in our curriculum has transformed our approach to STEM education. Our students are now better prepared for future technology challenges.",
    company: "Delhi Public School"
  },
  {
    name: "Raj Malhotra",
    role: "Director of Engineering, AI Solutions",
    image: "/placeholder.svg",
    quote: "The robotics training provided by Neuron helped us accelerate our R&D timeline by months. Their hands-on approach to learning complex concepts made all the difference.",
    company: "AI Solutions"
  },
  {
    name: "Priya Verma",
    role: "IT Head, Global Services Inc",
    image: "/placeholder.svg",
    quote: "Our partnership with Neuron for corporate training has resulted in measurable improvements in our technical team's capabilities, especially in AI and data science domains.",
    company: "Global Services Inc"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 500 : -500,
        opacity: 0
      };
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-neuron-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Corporate </span>
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hear what our corporate partners and educational institutions have to say about our training programs.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="glass-card rounded-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neuron-primary to-neuron-accent flex items-center justify-center">
                  <Quote className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-white text-lg md:text-xl italic mb-8">"{testimonialsData[currentIndex].quote}"</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonialsData[currentIndex].name}</h4>
                      <p className="text-neuron-primary">{testimonialsData[currentIndex].role}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-neuron-primary mr-2" />
                        <span className="text-gray-400">{testimonialsData[currentIndex].company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleNext}
              className="px-6 py-3 bg-neuron-primary/20 rounded-full text-white flex items-center hover:bg-neuron-primary/30 transition-colors"
            >
              Next Testimonial <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-neuron-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

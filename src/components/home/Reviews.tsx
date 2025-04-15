
import { useState } from 'react';
import { Star, StarHalf, User, Users, MessageSquare, Building } from 'lucide-react';
import { motion } from 'framer-motion';

// Review data
const reviewsData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Data Science Graduate",
    content: "The Data Science course at Neuron completely transformed my career. The practical approach and real-world projects helped me land a job at a top tech company. The mentors were incredibly supportive throughout.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "IoT Professional",
    content: "I took the IoT course while working full-time. The flexible schedule and hands-on projects made learning enjoyable. Within weeks of completing the course, I was able to implement IoT solutions at my workplace.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Data Analytics Student",
    content: "As someone with no prior experience in data, I was amazed at how quickly I picked up the concepts. The step-by-step approach and practice exercises made learning data analytics fun and engaging.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Robotics Engineer",
    content: "The ROS 2 course was exactly what I needed to advance in my career. The practical assignments and project-based learning approach gave me confidence to work on complex robotics problems.",
    rating: 4.5,
  },
];

// Stats data
const statsData = [
  { id: 1, count: "5,000+", label: "Students", icon: <Users className="w-8 h-8 text-neuron-primary" /> },
  { id: 2, count: "50+", label: "Corporate Clients", icon: <Building className="w-8 h-8 text-neuron-primary" /> },
  { id: 3, count: "15+", label: "Industry Experts", icon: <User className="w-8 h-8 text-neuron-primary" /> },
  { id: 4, count: "1,000+", label: "Success Stories", icon: <MessageSquare className="w-8 h-8 text-neuron-primary" /> },
];

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
    }
    
    return stars;
  };
  
  const nextReview = () => {
    setActiveReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };
  
  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-black to-neuron-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Student </span>
            <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hear what our students have to say about their learning journey with Neuron AI & Robotics.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="glass-card p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.count}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col items-center text-center">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-neuron-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <User className="w-8 h-8 text-neuron-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{reviewsData[activeReview].name}</h3>
                <p className="text-neuron-primary mb-3">{reviewsData[activeReview].role}</p>
                <div className="flex justify-center mb-4">
                  {renderStars(reviewsData[activeReview].rating)}
                </div>
                <p className="text-gray-300 italic">"{reviewsData[activeReview].content}"</p>
              </motion.div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-neuron-primary/20 flex items-center justify-center text-white hover:bg-neuron-primary/30 transition-colors"
                >
                  &lt;
                </button>
                <button 
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-neuron-primary/20 flex items-center justify-center text-white hover:bg-neuron-primary/30 transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
          
          {/* Review Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviewsData.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full ${
                  activeReview === index ? 'bg-neuron-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

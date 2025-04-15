
import { Download, ArrowRight, Python, Database, Bot, Brain, Eye, BarChart2 } from 'lucide-react';
import TechIcon from '@/components/ui/TechIcon';

const courses = [
  {
    title: "Data Science",
    description: "Master data science with Python, SQL, machine learning, and real-world projects.",
    price: "₹49,999",
    color: "from-red-500 to-red-600",
    shadow: "shadow-red-500/20",
  },
  {
    title: "Data Analytics",
    description: "Learn data analysis, visualization, and insights using tools like Python and Tableau.",
    price: "₹24,999",
    color: "from-red-400 to-red-500",
    shadow: "shadow-red-400/20",
  },
  {
    title: "IoT (Internet of Things)",
    description: "Build IoT devices, integrate hardware and software, and explore real-world IoT applications.",
    price: "₹24,999",
    color: "from-red-500 to-neuron-primary",
    shadow: "shadow-red-500/20",
  },
  {
    title: "ROS 2 & Autonomous Systems",
    description: "Develop autonomous robots, learn ROS 2, and work on self-driving technology projects.",
    price: "₹24,999",
    color: "from-neuron-primary to-red-600",
    shadow: "shadow-neuron-primary/20",
  }
];

const Courses = () => {
  const handleBrochureDownload = () => {
    window.open("https://drive.google.com/file/d/13Mkv71xPJXVw1bfTg6qfT3RuIM5RfyP4/view", "_blank");
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-black to-neuron-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive programs designed to equip you with industry-relevant skills in AI, robotics, and data science.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <TechIcon 
            icon={<Python className="w-8 h-8 text-white" />} 
            label="Python" 
            color="bg-gradient-to-r from-neuron-primary to-red-500"
            delay={0}
          />
          <TechIcon 
            icon={<Database className="w-8 h-8 text-white" />} 
            label="SQL" 
            color="bg-gradient-to-r from-red-500 to-red-600"
            delay={1}
          />
          <TechIcon 
            icon={<Bot className="w-8 h-8 text-white" />} 
            label="ROS2" 
            color="bg-gradient-to-r from-red-600 to-red-700"
            delay={2}
          />
          <TechIcon 
            icon={<Brain className="w-8 h-8 text-white" />} 
            label="LLM" 
            color="bg-gradient-to-r from-red-700 to-red-800"
            delay={3}
          />
          <TechIcon 
            icon={<Brain className="w-8 h-8 text-white" />} 
            label="Gen AI" 
            color="bg-gradient-to-r from-red-800 to-black"
            delay={4}
          />
          <TechIcon 
            icon={<Eye className="w-8 h-8 text-white" />} 
            label="Computer Vision" 
            color="bg-gradient-to-r from-black to-red-800"
            delay={5}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${course.color} h-3`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{course.title}</h3>
                <p className="text-gray-400 mb-6">{course.description}</p>
                <div className="flex justify-between items-end">
                  <span className="text-white text-2xl font-bold">{course.price}</span>
                  <a href="#contact" className={`bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full ${course.shadow} hover:shadow-lg transition-all`}>
                    Enroll
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={handleBrochureDownload}
            className="inline-flex items-center px-6 py-3 bg-neuron-primary text-white rounded-full font-medium hover:bg-neuron-secondary transition-all"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Course Brochure
          </button>
        </div>
        
        <div className="mt-16 glass-card p-8 rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Innovator's Pathway Package</h3>
            <p className="text-gray-400">Get all four courses at a discounted price</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-neuron-primary/10">
                    <td className="py-3 text-gray-300 font-medium">Number of Courses</td>
                    <td className="py-3 text-white font-semibold">4</td>
                  </tr>
                  <tr className="border-b border-neuron-primary/10">
                    <td className="py-3 text-gray-300 font-medium">Duration</td>
                    <td className="py-3 text-white font-semibold">14 Months</td>
                  </tr>
                  <tr className="border-b border-neuron-primary/10">
                    <td className="py-3 text-gray-300 font-medium">Discount</td>
                    <td className="py-3 text-white font-semibold">15-20% OFF</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300 font-medium">Seats</td>
                    <td className="py-3 text-white font-semibold">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="text-center mb-4">
                <p className="text-gray-400 mb-1">Total Value: <span className="line-through">₹1,24,996</span></p>
                <p className="text-2xl md:text-3xl font-bold text-white">Discounted Price: ₹99,999</p>
              </div>
              <a href="#contact" className="hero-button bg-gradient-to-r from-neuron-primary to-red-600 text-white shadow-lg shadow-neuron-primary/20 w-full md:w-auto text-center">
                Enroll Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

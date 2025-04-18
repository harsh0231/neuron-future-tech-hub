
import { useState } from 'react';
import { Download, ArrowRight, Code, Database, Bot, Brain, Eye, BarChart2 } from 'lucide-react';
import TechIcon from '@/components/ui/TechIcon';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const courses = [
  {
    title: "Data Science",
    description: "Master data science with Python, SQL, machine learning, and real-world projects.",
    price: "₹49,999",
    duration: "6-7 months",
    color: "from-red-500 to-red-600",
    shadow: "shadow-red-500/20",
    modules: [
      {
        title: "Module 1: Introduction to Data Science",
        content: "What is Data Science? Applications and Real-World Use Cases, Data Science Lifecycle: From Data Collection to Deployment, Tools and Technologies in Data Science (Python, SQL, TensorFlow, etc.)"
      },
      {
        title: "Module 2: Python for Data Science",
        content: "Introduction to Python for Data Science, Python Basics, Data Structures in Python, File Handling, Advanced Python, OOP, NumPy, Pandas, Data Visualization with Matplotlib and Seaborn"
      },
      {
        title: "Module 3: SQL and NoSQL Databases",
        content: "SQL Basics: Core Commands, Joins, Subqueries and Aggregations, Advanced SQL, Window Functions, NoSQL Databases, MongoDB, CRUD Operations"
      },
      {
        title: "Module 4: Data Visualization",
        content: "Introduction to Data Visualization, Types of Visualizations, Tools for Visualization (Matplotlib, Seaborn, Tableau, Power BI), Dashboards and Interactive Visualizations"
      },
      {
        title: "Module 5: Statistics and Probability",
        content: "Descriptive Statistics, Probability Distributions, Hypothesis Testing, Regression Analysis"
      },
      {
        title: "Module 6: Machine Learning",
        content: "Supervised Learning (Linear Regression, Logistic Regression, Decision Trees), Unsupervised Learning (K-Means Clustering, PCA), Model Evaluation"
      },
      {
        title: "Module 7: Deep Learning",
        content: "Introduction to Neural Networks, Backpropagation, CNNs for Image Classification, RNNs for Time Series Forecasting"
      },
      {
        title: "Module 8: Natural Language Processing",
        content: "Text Preprocessing, Feature Extraction, Sentiment Analysis, Named Entity Recognition, Building Custom Chatbots using RAG"
      },
      {
        title: "Module 9: Computer Vision",
        content: "Image Preprocessing, Object Detection (YOLO, Faster R-CNN), Face Recognition Systems, GANs"
      },
      {
        title: "Module 10: Big Data and Cloud",
        content: "Introduction to Big Data: Hadoop and Spark, PySpark for Large-Scale Data Processing, Cloud Platforms: AWS, Google Cloud, Azure"
      }
    ]
  },
  {
    title: "Data Analytics",
    description: "Learn data analysis, visualization, and insights using tools like Python and Tableau.",
    price: "₹24,999",
    duration: "3-4 months",
    color: "from-red-400 to-red-500",
    shadow: "shadow-red-400/20",
    modules: [
      {
        title: "Module 1: Introduction to Data Analytics",
        content: "Overview of Data Analytics, Importance and Applications in Real-World Scenarios, Data Analytics Process, Tools and Technologies"
      },
      {
        title: "Module 2: Data Handling and Preprocessing",
        content: "Data Types, Importing and Exporting Data, Data Cleaning Techniques, Data Transformation, Feature Engineering, Exploratory Data Analysis (EDA)"
      },
      {
        title: "Module 3: Statistics for Data Analytics",
        content: "Basics of Statistics, Probability Concepts, Hypothesis Testing, Correlation and Regression, ANOVA, Time Series Analysis"
      },
      {
        title: "Module 4: Data Visualization",
        content: "Introduction to Data Visualization, Types of Visualizations, Tools for Visualization, Dashboards and Interactive Visualizations, Design Principles"
      },
      {
        title: "Module 5: Database Management and SQL",
        content: "Relational Database Basics, SQL Queries, Advanced SQL (Joins, Subqueries), Data Manipulation with SQL, Database Design and Normalization"
      },
      {
        title: "Module 6: Python for Data Analytics",
        content: "Introduction to Python, Python Basics, Data Handling with NumPy and Pandas, Data Visualization with Matplotlib and Seaborn"
      },
      {
        title: "Module 7: Web Scraping and API Integration",
        content: "Introduction, Web Scraping with Python, BeautifulSoup, Requests, Selenium, Extracting Data from Websites"
      }
    ]
  },
  {
    title: "IoT (Internet of Things)",
    description: "Build IoT devices, integrate hardware and software, and explore real-world IoT applications.",
    price: "₹24,999",
    duration: "3 months",
    color: "from-red-500 to-neuron-primary",
    shadow: "shadow-red-500/20",
    modules: [
      {
        title: "Module 1: Introduction to IoT",
        content: "What is IoT? Concepts, Architecture, and Ecosystem, Applications of IoT in Real-World Scenarios, Overview of IoT Platforms and Communication Protocols, IoT Hardware Overview"
      },
      {
        title: "Module 2: IoT Hardware and Devices",
        content: "Microcontrollers and Development Boards (Arduino, Raspberry Pi, ESP32), Setting Up and Programming Development Boards, Sensors and Actuators"
      },
      {
        title: "Module 3: IoT Communication Protocols",
        content: "Wired Protocols (UART, SPI, I2C), Wireless Communication (Wi-Fi, Bluetooth, Zigbee), MQTT and HTTP for IoT"
      },
      {
        title: "Module 4: IoT Software Development",
        content: "Programming for IoT Devices, C/C++ for Arduino, Python for Raspberry Pi, IoT Data Handling"
      },
      {
        title: "Module 5: IoT Applications",
        content: "Home Automation, Healthcare IoT, Smart Cities Applications"
      }
    ]
  },
  {
    title: "ROS 2 & Autonomous Systems",
    description: "Develop autonomous robots, learn ROS 2, and work on self-driving technology projects.",
    price: "₹24,999",
    duration: "3 months",
    color: "from-neuron-primary to-red-600",
    shadow: "shadow-neuron-primary/20",
    modules: [
      {
        title: "Module 1: Introduction to ROS 2 and Self-Driving",
        content: "Overview of ROS 2, Setting Up the Development Environment, Introduction to Self-Driving Robots"
      },
      {
        title: "Module 2: Building a Self-Driving Robot",
        content: "Hardware Components, Robot Modeling (URDF), Simulation with Gazebo"
      },
      {
        title: "Module 3: Odometry and Localization",
        content: "Understanding Odometry, Implementing Odometry in ROS 2, Localization Techniques"
      },
      {
        title: "Module 4: Control Systems for Self-Driving",
        content: "Introduction to Control Theory, Implementing ros2_control, Developing Custom Controllers"
      },
      {
        title: "Module 5: Sensor Integration and Fusion",
        content: "Working with Sensors (LIDAR, IMU, cameras), Sensor Fusion Algorithms"
      },
      {
        title: "Module 6: Advanced Topics",
        content: "Probability Theory in Robotics, Path Planning and Navigation, Real-World Application"
      },
      {
        title: "TurtleBot Projects",
        content: "Autonomous Navigation, Obstacle Avoidance, Path Following, SLAM, Advanced Navigation, Autonomous Docking, Multi-Robot Navigation"
      }
    ]
  }
];

const Courses = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  
  const handleBrochureDownload = () => {
    window.open("https://drive.google.com/file/d/13Mkv71xPJXVw1bfTg6qfT3RuIM5RfyP4/view", "_blank");
  };

  const toggleCourse = (index: number) => {
    if (expandedCourse === index) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(index);
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-black to-neuron-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-gray-400 mx-auto">
            Comprehensive programs designed to equip you with industry-relevant skills in AI, robotics, and data science.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <TechIcon 
            icon={<Code className="w-8 h-8 text-white" />} 
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
          <TechIcon 
            icon={<BarChart2 className="w-8 h-8 text-white" />} 
            label="Data Analytics" 
            color="bg-gradient-to-r from-red-800 to-neuron-primary"
            delay={6}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${expandedCourse === index ? 'xl:col-span-4 row-span-2' : ''}`}
            >
              <div className={`bg-gradient-to-r ${course.color} h-3`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{course.title}</h3>
                <p className="text-gray-400 mb-6">{course.description}</p>
                
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-white text-2xl font-bold">{course.price}</span>
                    <p className="text-gray-400 text-sm">Duration: {course.duration}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleCourse(index)} 
                      className={`px-4 py-2 rounded-full text-white border border-neuron-primary hover:bg-neuron-primary/20 transition-all`}
                    >
                      {expandedCourse === index ? "Close" : "Details"}
                    </button>
                    <a 
                      href="#contact" 
                      className={`bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full ${course.shadow} hover:shadow-lg transition-all`}
                    >
                      Enroll
                    </a>
                  </div>
                </div>
                
                {expandedCourse === index && (
                  <div className="mt-6 animate-fadeIn">
                    <h4 className="text-lg font-semibold text-white mb-4">Course Syllabus</h4>
                    <Accordion type="single" collapsible className="w-full">
                      {course.modules.map((module, moduleIndex) => (
                        <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`} className="border-neuron-primary/20">
                          <AccordionTrigger className="text-white hover:no-underline hover:text-neuron-light">
                            {module.title}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-400">
                            {module.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    
                    <div className="mt-6 p-4 bg-neuron-primary/10 rounded-lg">
                      <h5 className="text-white font-semibold mb-2">Capstone Projects</h5>
                      <p className="text-gray-400">
                        {course.title === "Data Science" && "Custom Chatbot Development, Face Recognition System, Sales forecasting, and collaboration with MNCs."}
                        {course.title === "Data Analytics" && "Business Intelligence Dashboard, Predictive Analytics Model, and Data-Driven Decision Making System."}
                        {course.title === "IoT (Internet of Things)" && "Smart Home System, IoT Weather Station, Healthcare IoT device, and Smart Agriculture System."}
                        {course.title === "ROS 2 & Autonomous Systems" && "TurtleBot Autonomous Navigation, SLAM implementation, and Multi-Robot coordination."}
                      </p>
                    </div>
                  </div>
                )}
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
        
        <div className="mt-16 glass-card p-8 rounded-xl max-w-6xl mx-auto">
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

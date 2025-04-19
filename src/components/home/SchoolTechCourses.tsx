
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Bot, Brain, Database } from 'lucide-react';

const coursesData = {
  5: {
    title: "Class 5th: Foundations of Technology",
    focus: "Building foundational knowledge in technology, programming, IoT, and logical thinking",
    core_subjects: [
      "Computer Basics",
      "Scratch Programming",
      "IoT Introduction",
      "Basic AI Concepts",
      "Project Management"
    ],
    skills: [
      "Basic technology understanding",
      "Simple IoT project design",
      "Logical problem-solving",
      "Teamwork skills"
    ]
  },
  6: {
    title: "Class 6th: Emerging Tech Exploration",
    focus: "Strengthening foundational programming and introducing IoT and AI concepts",
    core_subjects: [
      "Python Programming Basics",
      "IoT Sensor Work",
      "Basic Data Science",
      "AI Fundamentals",
      "Collaborative Learning"
    ],
    skills: [
      "Python programming basics",
      "IoT device interaction",
      "Data visualization",
      "Team collaboration"
    ]
  },
  7: {
    title: "Class 7th: AI and IoT Integration",
    focus: "Integrating AI and IoT for real-world applications",
    core_subjects: [
      "Advanced Python",
      "IoT Project Development",
      "AI Application",
      "Data Analysis",
      "Critical Thinking"
    ],
    skills: [
      "Advanced Python programming",
      "IoT project implementation",
      "AI application development",
      "Data analysis and interpretation"
    ]
  },
  8: {
    title: "Class 8th: Robotics and AI",
    focus: "Exploring robotics combined with AI for automation",
    core_subjects: [
      "Robotics Introduction",
      "AI Algorithms",
      "Sensor Integration",
      "Automation",
      "Design Thinking"
    ],
    skills: [
      "Robotics design and control",
      "AI algorithm implementation",
      "Sensor integration",
      "Automation techniques"
    ]
  },
  9: {
    title: "Class 9th: Advanced AI and Machine Learning",
    focus: "Delving into advanced AI and machine learning concepts",
    core_subjects: [
      "Machine Learning",
      "Neural Networks",
      "Data Mining",
      "Predictive Analysis",
      "Ethical AI"
    ],
    skills: [
      "Machine learning model development",
      "Neural network design",
      "Data mining techniques",
      "Predictive analysis skills"
    ]
  },
  10: {
    title: "Class 10th: Robotics and Automation Systems",
    focus: "Designing and implementing complex robotic systems",
    core_subjects: [
      "Advanced Robotics",
      "Control Systems",
      "AI in Robotics",
      "System Design",
      "Innovation"
    ],
    skills: [
      "Robotics system design",
      "Control system implementation",
      "AI integration in robotics",
      "System design and innovation"
    ]
  },
  11: {
    title: "Class 11th: AI-Driven IoT Solutions",
    focus: "Creating AI-driven IoT solutions for smart environments",
    core_subjects: [
      "IoT Architecture",
      "AI Integration",
      "Cloud Computing",
      "Data Security",
      "Solution Deployment"
    ],
    skills: [
      "IoT architecture design",
      "AI integration in IoT",
      "Cloud computing skills",
      "Data security implementation"
    ]
  },
  12: {
    title: "Class 12th: Capstone Project in AI and Robotics",
    focus: "Developing a capstone project integrating AI and robotics",
    core_subjects: [
      "Project Management",
      "Advanced AI",
      "Robotics Application",
      "Research",
      "Presentation Skills"
    ],
    skills: [
      "Project management skills",
      "Advanced AI application",
      "Robotics project implementation",
      "Research and presentation skills"
    ]
  },
};

const SchoolTechCourses: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const renderClassCard = (classNumber: number) => {
    const course = coursesData[classNumber as keyof typeof coursesData];
    
    return (
      <motion.div 
        key={`class-${classNumber}`}
        className="glass-card p-6 rounded-xl space-y-4 bg-black/50 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h3 className="text-2xl font-bold text-white">{course.title}</h3>
        <p className="text-gray-300">{course.focus}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-semibold text-neuron-primary mb-2">Core Subjects</h4>
            <ul className="space-y-2 text-gray-400">
              {course.core_subjects.map((subject, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-neuron-primary" />
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neuron-primary mb-2">Skills Acquired</h4>
            <ul className="space-y-2 text-gray-400">
              {course.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-neuron-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="school-tech-courses" className="py-24 md:py-32 bg-gradient-to-b from-neuron-dark to-black w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Future-Ready </span>
            <span className="text-gradient">Tech Courses</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology education tailored for school students, blending foundational learning with cutting-edge technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[5, 6, 7, 8, 9, 10, 11, 12].map((classNumber) => (
            <button
              key={classNumber}
              onClick={() => setSelectedClass(classNumber)}
              className={`
                px-4 py-2 rounded-full transition-all
                ${selectedClass === classNumber 
                  ? 'bg-neuron-primary text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'}
              `}
            >
              Class {classNumber}
            </button>
          ))}
        </div>
        
        <AnimatePresence>
          {selectedClass && (
            <div className="mt-8">
              {renderClassCard(selectedClass)}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SchoolTechCourses;

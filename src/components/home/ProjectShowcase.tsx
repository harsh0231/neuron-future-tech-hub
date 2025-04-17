
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, CircuitBoard, Rocket, Brain, Phone, Smartphone, Wrench } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const robotAnimation = {
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai');

  const projects = {
    ai: [
      {
        title: "AI Attendance System",
        description: "A face recognition-based system that marks attendance without any manual input. Built using OpenCV and a simple CNN model.",
        icon: Brain
      },
      {
        title: "AI Chatbot for Student FAQs",
        description: "A chatbot that can answer common questions like exam dates, syllabus, and assignment deadlines using natural language processing.",
        icon: Bot
      },
      {
        title: "Emotion Detector",
        description: "A web camera-based tool that detects if someone is happy, sad, or angry using a pre-trained AI model. Great for engagement.",
        icon: Brain
      },
      {
        title: "Handwritten Digit Recognition",
        description: "Upload an image of a digit, and the AI predicts it in real-time. A simple yet powerful way to showcase neural networks.",
        icon: Brain
      }
    ],
    iot: [
      {
        title: "Smart Plant Monitoring System",
        description: "Monitors soil moisture, light, and temperature, and alerts when the plant needs watering. Displays data in a simple dashboard.",
        icon: CircuitBoard
      },
      {
        title: "Home Automation with Mobile App",
        description: "Control lights, fan, and other appliances using your phone. Powered by NodeMCU and Blynk/Arduino IoT Cloud.",
        icon: Smartphone
      },
      {
        title: "Temperature & Humidity Logger",
        description: "Real-time room condition monitoring system with a web-based dashboard using DHT11 sensor + ESP8266.",
        icon: CircuitBoard
      },
      {
        title: "Gas Leak Detection System",
        description: "Alerts through buzzer and SMS when it detects dangerous gas levels in the kitchen/lab.",
        icon: CircuitBoard
      }
    ],
    robotics: [
      {
        title: "Line Following Robot",
        description: "A simple robot that follows a black line path using IR sensors. Very engaging for students to watch in motion.",
        icon: Bot
      },
      {
        title: "Voice Controlled Robot",
        description: "Speak to control the robot's direction—forward, back, left, right. Uses Google Assistant or voice module.",
        icon: Bot
      },
      {
        title: "Obstacle Avoiding Robot",
        description: "Moves around and avoids any object that comes in its path using ultrasonic sensors. Great for demo shows.",
        icon: Bot
      },
      {
        title: "RFID-Based Door Lock System",
        description: "Uses an RFID card to unlock a door. Mimics secure access control used in offices and industries.",
        icon: Wrench
      }
    ]
  };

  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Student </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our cutting-edge projects designed specifically for students
          </p>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <motion.div
            whileHover="hover"
            variants={robotAnimation}
            className="text-neuron-primary"
          >
            <Bot size={40} />
          </motion.div>
          <motion.div
            whileHover="hover"
            variants={robotAnimation}
            className="text-neuron-accent"
          >
            <Cpu size={40} />
          </motion.div>
          <motion.div
            whileHover="hover"
            variants={robotAnimation}
            className="text-neuron-light"
          >
            <CircuitBoard size={40} />
          </motion.div>
          <motion.div
            whileHover="hover"
            variants={robotAnimation}
            className="text-neuron-primary"
          >
            <Rocket size={40} />
          </motion.div>
        </div>

        {/* Project Categories Tabs */}
        <Tabs defaultValue="ai" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-black/20">
            <TabsTrigger 
              value="ai"
              onClick={() => setSelectedCategory('ai')}
              className="data-[state=active]:bg-neuron-primary"
            >
              AI Projects
            </TabsTrigger>
            <TabsTrigger 
              value="iot"
              onClick={() => setSelectedCategory('iot')}
              className="data-[state=active]:bg-neuron-primary"
            >
              IoT Projects
            </TabsTrigger>
            <TabsTrigger 
              value="robotics"
              onClick={() => setSelectedCategory('robotics')}
              className="data-[state=active]:bg-neuron-primary"
            >
              Robotics Projects
            </TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projectList.map((project, index) => (
                  <motion.div key={index} variants={itemAnimation}>
                    <Card className="bg-black/30 border-neuron-primary/20 hover:border-neuron-primary/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-neuron-primary/20">
                            <project.icon className="w-6 h-6 text-neuron-light" />
                          </div>
                          <CardTitle className="text-white">{project.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-400 mt-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Workshop CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center p-8 bg-black/30 rounded-lg border border-neuron-primary/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">School Workshops Available</h3>
          <p className="text-gray-400 mb-4">
            We organize 3-day and 7-day workshops (summer camps, winter camps) at schools for AI and robotics projects.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:info@neuron.org.in"
              className="bg-neuron-primary text-white px-6 py-3 rounded-full hover:bg-neuron-primary/90 transition-colors"
            >
              Contact for Workshop
            </a>
            <a 
              href="https://wa.me/9263624743"
              className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20BA5C] transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

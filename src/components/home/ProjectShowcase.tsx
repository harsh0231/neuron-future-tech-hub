
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, CircuitBoard, Rocket } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const robotAnimation = {
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ProjectShowcase = () => {
  const [selectedTab, setSelectedTab] = useState('videos');

  const videos = [
    {
      title: "Autonomous Navigation Robot",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
      description: "Our autonomous robot navigating through complex environments"
    },
    {
      title: "Smart Home Automation",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
      description: "Complete home automation system with voice control"
    }
  ];

  const images = [
    {
      title: "IoT Weather Station",
      src: "/iot-weather.jpg", // You'll need to add these images
      description: "Real-time weather monitoring system"
    },
    {
      title: "Smart Agriculture System",
      src: "/smart-agriculture.jpg", // You'll need to add these images
      description: "IoT-based irrigation and crop monitoring"
    }
  ];

  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gradient">Latest Projects</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our cutting-edge robotics and IoT projects in action
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

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedTab('videos')}
            className={`px-6 py-2 rounded-full transition ${
              selectedTab === 'videos' 
                ? 'bg-neuron-primary text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setSelectedTab('images')}
            className={`px-6 py-2 rounded-full transition ${
              selectedTab === 'images' 
                ? 'bg-neuron-primary text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Projects
          </button>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <Carousel>
            <CarouselContent>
              {selectedTab === 'videos' ? (
                videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video w-full">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                      <p className="text-gray-400">{video.description}</p>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full rounded-lg object-cover aspect-video"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                      <p className="text-gray-400">{image.description}</p>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;


import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/lovable-uploads/f24ddd2f-894d-48d4-b54e-107b11547c56.png",
  "/lovable-uploads/b889be78-8a8a-47b0-a997-09295a8a6f7b.png",
  "/lovable-uploads/a535819f-45d2-4a57-aac8-a1ae12844441.png",
  "/lovable-uploads/ec247f57-8a73-40d5-8664-e5d5685a4f81.png",
  "/lovable-uploads/666c4669-2f08-4358-bf33-3588ca66006b.png",
  "/lovable-uploads/01d596ca-fe11-4a79-9de7-9becbe2c7a37.png"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-neuron-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Our Learning Environment
        </motion.h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500"
                  />
                  {/* Overlay gradient on hover */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-neuron-primary/70 to-transparent"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 bg-neuron-accent hover:bg-neuron-primary text-white" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 bg-neuron-accent hover:bg-neuron-primary text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;

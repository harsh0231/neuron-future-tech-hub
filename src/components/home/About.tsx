
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neuron-dark relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-neuron-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-neuron-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-gradient">Us</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Learn more about our mission, vision, and commitment to excellence in AI and Robotics education.
          </p>
        </div>
        
        <div className="glass-card p-8 md:p-10 rounded-xl max-w-4xl mx-auto">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Neuron AI and Robotics is a premier institute dedicated to advancing education in Artificial Intelligence and Robotics. Our mission is to empower individuals with the skills and knowledge necessary to thrive in these fields. We provide a unique blend of theoretical foundations and hands-on learning, enabling students to engage with real-world projects that mirror industry challenges.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            With a team of exceptional faculty, including IIT alumni and experienced professionals, we ensure our students receive top-tier mentorship and education. Our programs are designed to provide practical exposure, offering opportunities to work on live projects with leading multinational companies. These collaborations not only enhance learning but also help students earn Industry-Recognized Certifications, strengthening their career prospects.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            In addition to our educational initiatives, we specialize in developing Custom Chatbot Solutions tailored to business needs, showcasing our commitment to innovation. At Neuron AI and Robotics, we aim to create a dynamic learning environment where students can unlock their potential and build a successful future in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Award, BookOpen, Briefcase, Cpu, Shield, UserPlus } from 'lucide-react';

const benefits = [
  {
    icon: <UserPlus className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "Placement Assistance",
    description: "Experience unmatched 100% Placement Support, with connections to top industry leaders and personalized career guidance."
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "Hands-On Industry Projects",
    description: "Work on live, client-based projects from multinational companies to build a portfolio that stands out."
  },
  {
    icon: <Award className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "Global Certifications",
    description: "Earn certifications recognized globally, backed by our partnerships with top tech giants and academic institutions."
  },
  {
    icon: <Shield className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "Expert Mentorship",
    description: "Learn from IIT alumni and industry professionals working at Fortune 500 companies."
  },
  {
    icon: <Cpu className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "Innovative Technologies",
    description: "Get hands-on with cutting-edge technologies like AI, IoT, Robotics, and Autonomous Systems."
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-neuron-accent" />,
    title: "End-to-End Career Services",
    description: "Benefit from resume optimization, LinkedIn building, mock interviews, and direct connections with HR professionals."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-gradient">Neuron?</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive learning experience with industry-relevant skills, expert mentorship, and career support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl border border-neuron-primary/10 hover:border-neuron-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-neuron-primary/5 group"
            >
              <div className="bg-neuron-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neuron-primary/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

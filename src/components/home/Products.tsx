
import { Bot, Globe, Home, Shield } from 'lucide-react';

const products = [
  {
    icon: <Bot className="w-10 h-10 mb-6 text-neuron-accent" />,
    title: "Customiz AI Solutions Development",
    description: "We build advanced chatbots using RAG (OLAMA) technology with VR-based animations integrated into kiosks."
  },
  {
    icon: <Globe className="w-10 h-10 mb-6 text-neuron-accent" />,
    title: "Website Designing",
    description: "We design professional and responsive websites tailored to your needs."
  },
  {
    icon: <Home className="w-10 h-10 mb-6 text-neuron-accent" />,
    title: "Home Automation Products",
    description: "Our home automation solutions bring convenience and efficiency to your living space."
  },
  {
    icon: <Shield className="w-10 h-10 mb-6 text-neuron-accent" />,
    title: "Computer Vision Security",
    description: "State-of-the-art security systems powered by computer vision for enhanced safety."
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Innovative solutions powered by AI and robotics technology for businesses and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-neuron-primary/10 group"
            >
              <div className="inline-flex items-center justify-center bg-neuron-primary/10 w-20 h-20 rounded-full mb-6 group-hover:bg-neuron-primary/20 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            If you're interested in our products or services, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@neuron.org.in" className="text-white">
              <span className="font-medium">Email:</span> info@neuron.org.in
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a href="tel:+919263624743" className="text-white">
              <span className="font-medium">Phone:</span> +91 92636 24743
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

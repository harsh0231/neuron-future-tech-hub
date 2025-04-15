
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-neuron-dark to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="text-gradient">Us</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have questions or ready to enroll? Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
            
            {formSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-green-400 font-medium">Thank you for contacting us! We'll get back to you soon.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-neuron-primary/20 text-white focus:border-neuron-primary focus:outline-none focus:ring-1 focus:ring-neuron-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-neuron-primary/20 text-white focus:border-neuron-primary focus:outline-none focus:ring-1 focus:ring-neuron-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-neuron-primary/20 text-white focus:border-neuron-primary focus:outline-none focus:ring-1 focus:ring-neuron-primary"
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="course" className="block text-gray-300 mb-2">Interested In</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-neuron-primary/20 text-white focus:border-neuron-primary focus:outline-none focus:ring-1 focus:ring-neuron-primary"
                >
                  <option value="" disabled>Select a course</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="IoT">IoT (Internet of Things)</option>
                  <option value="ROS">ROS 2 & Autonomous Systems</option>
                  <option value="Innovator Package">Innovator's Pathway Package</option>
                  <option value="School Program">School Programs</option>
                  <option value="Products">Products & Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-neuron-primary/20 text-white focus:border-neuron-primary focus:outline-none focus:ring-1 focus:ring-neuron-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neuron-primary to-neuron-accent text-white py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-neuron-accent/20 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="glass-card p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-neuron-primary/20 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-neuron-light" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+919263624743" className="text-gray-400 hover:text-neuron-light transition-colors">+91 9263624743</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neuron-primary/20 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-neuron-light" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:info@neuron.org.in" className="text-gray-400 hover:text-neuron-light transition-colors">info@neuron.org.in</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neuron-primary/20 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-neuron-light" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-gray-400">1st Floor, AnjuShree Complex, East Jail Road, Ranchi - 834001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              {/* Embed Google Maps iframe here */}
              <div className="w-full h-full bg-neuron-primary/20 flex items-center justify-center">
                <p className="text-gray-400">Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

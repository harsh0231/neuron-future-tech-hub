
import { Helmet } from 'react-helmet-async';

const Head = () => {
  // SEO metadata
  const title = "Neuron AI & Robotics - Cutting-Edge Tech Education";
  const description = "Learn AI, Data Science, IoT, and Robotics with industry experts. Comprehensive courses for students and professionals with placement assistance and hands-on projects.";
  const keywords = "AI courses, robotics training, data science education, IoT learning, tech education, programming courses, machine learning, deep learning, computer vision, ROS 2, autonomous systems";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Neuron AI & Robotics" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://neuron-ai-robotics.com" />
      
      {/* Additional SEO improvements */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Neuron AI & Robotics" />
    </Helmet>
  );
};

export default Head;

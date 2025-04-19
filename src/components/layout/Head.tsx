
import { Helmet } from 'react-helmet-async';

const Head = () => {
  // Enhanced SEO metadata
  const title = "Neuron AI & Robotics - Cutting-Edge Tech Education";
  const description = "Learn AI, Data Science, IoT, and Robotics with industry experts. Comprehensive courses for students and professionals with placement assistance and hands-on projects.";
  const keywords = "AI courses, robotics training, data science education, IoT learning, tech education, programming courses, machine learning, deep learning, computer vision, ROS 2, autonomous systems, school technology courses, coding for kids, STEM education";
  const url = "https://neuron-ai-robotics.com";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Neuron AI & Robotics" />
      <meta property="og:image" content={`${url}/logo.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/logo.png`} />
      
      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Neuron AI & Robotics",
            "url": "${url}",
            "logo": "${url}/logo.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jaipur",
              "addressRegion": "Rajasthan",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9263624743",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/neuronairobotics",
              "https://www.instagram.com/neuron_ai_robotics/",
              "https://www.linkedin.com/company/neuron-ai-robotics"
            ]
          }
        `}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO improvements */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Neuron AI & Robotics" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Alternate languages (if applicable) */}
      <link rel="alternate" hrefLang="en" href={url} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default Head;

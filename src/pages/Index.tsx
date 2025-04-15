
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WhyChoose from '@/components/home/WhyChoose';
import Courses from '@/components/home/Courses';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Contact from '@/components/home/Contact';
import ParticleBackground from '@/components/home/ParticleBackground';
import SchoolTechCourses from '@/components/home/SchoolTechCourses';
import Reviews from '@/components/home/Reviews'; // New import

const Index = () => {
  return (
    <Layout>
      <ParticleBackground />
      <Hero />
      <WhyChoose />
      <Courses />
      <SchoolTechCourses />
      <Reviews /> {/* Added new Reviews component */}
      <About />
      <Products />
      <Contact />
    </Layout>
  );
};

export default Index;

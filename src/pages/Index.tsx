import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Hero from '@/components/home/Hero';
import WhyChoose from '@/components/home/WhyChoose';
import Courses from '@/components/home/Courses';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Contact from '@/components/home/Contact';
import ParticleBackground from '@/components/home/ParticleBackground';
import SchoolTechCourses from '@/components/home/SchoolTechCourses';
import Reviews from '@/components/home/Reviews';
import ProjectShowcase from '@/components/home/ProjectShowcase';

const Index = () => {
  return (
    <Layout>
      <ParticleBackground />
      <Hero />
      <ScrollReveal>
        <WhyChoose />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Courses />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <SchoolTechCourses />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectShowcase />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Reviews />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Products />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;

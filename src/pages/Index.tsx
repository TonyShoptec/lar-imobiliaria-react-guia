
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto">
        <SearchBar />
      </div>
      <FeaturedProperties />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;

import HeroSection from '../components/home/HeroSection';
import Courses from '../components/home/Courses';
import TeachersSection from '../components/home/TeachersSection';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import CompanyPartners from '../components/home/CompanyPartners';

const Home = ({ onEnroll, enrolledIds, courses }) => {
  return (
   <div className="min-h-screen bg-[#020617] text-white">
      <HeroSection />
      
      {/* Home page-এ আমরা শুধু জনপ্রিয় কোর্সগুলো দেখাচ্ছি */}
      <Courses 
        onEnroll={onEnroll} 
        enrolledIds={enrolledIds} 
        courses={courses}
        limit={8} 
        showSeeAll={true} 
      />
      <TeachersSection />
      <Testimonials />
      <CompanyPartners/>
      <ContactSection />
    </div>
  );
};

export default Home;
import HeroSection from '../components/home/HeroSection';
import Courses from '../components/home/Courses';
import TeachersSection from '../components/home/TeachersSection';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import CompanyPartners from '../components/home/CompanyPartners';

const Home = ({ onEnroll, enrolledIds, courses }) => {
  return (
    // মেইন কন্টেইনার: লাইট মোডে সাদা (bg-white) এবং টেক্সট কালো (text-slate-900) হবে
    // ডার্ক মোডে আপনার সেই আগের কালার এবং সাদা টেক্সট থাকবে
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      
      <HeroSection />
      
      {/* Popular Courses Section */}
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
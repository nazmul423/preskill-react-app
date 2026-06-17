import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import Courses from '../components/home/Courses';
import TeachersSection from '../components/home/TeachersSection';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

const Home = ({ onEnroll, enrolledIds, courses }) => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Features />
      {/* Home page-এ আমরা শুধু জনপ্রিয় কোর্সগুলো দেখাচ্ছি */}
      <Courses 
        onEnroll={onEnroll} 
        enrolledIds={enrolledIds} 
        courses={courses} 
      />
      <TeachersSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
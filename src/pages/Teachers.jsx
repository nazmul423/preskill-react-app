import TeachersSection from '../components/home/TeachersSection';
import SectionTitle from '../components/common/SectionTitle';

const Teachers = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-8 text-center mb-[-40px]">
         <SectionTitle subtitle="Expert Faculty" title="World-Class Mentors" centered />
      </div>
      <TeachersSection />
      
      {/* আপনি চাইলে এখানে মেন্টরশিপের আলাদা বেনিফিট যোগ করতে পারেন */}
      <div className="max-w-4xl mx-auto px-8 pb-24 text-center">
        <p className="text-slate-500 italic">
          "Our mentors don't just teach; they prepare you for the real-world challenges 
          in AI, Robotics and Embedded Systems."
        </p>
      </div>
    </div>
  );
};

export default Teachers;
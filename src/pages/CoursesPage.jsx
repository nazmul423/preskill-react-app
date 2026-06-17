import SectionTitle from '../components/common/SectionTitle';
import Courses from '../components/home/Courses';

const CoursesPage = ({ onEnroll, enrolledIds, courses }) => {
  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
        <SectionTitle 
          subtitle="Full Catalog" 
          title="All Professional Programs" 
          centered 
        />
        <p className="text-slate-400 max-w-2xl mx-auto -mt-8 leading-relaxed">
          Master high-demand technologies with our industry-led certification programs. 
          Everything from AI to Hardware Architecture.
        </p>
      </div>
      
      {/* এখানে সব কোর্স একসাথে দেখা যাবে */}
      <Courses 
        onEnroll={onEnroll} 
        enrolledIds={enrolledIds} 
        courses={courses} 
      />
    </div>
  );
};

export default CoursesPage;
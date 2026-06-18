import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Courses = ({ courses, onEnroll, enrolledIds }) => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto bg-[#020617]">
      <SectionTitle subtitle="Industry Paths" title="Expert Programs" />
      
      <div className="grid md:grid-cols-3 gap-10">
        {courses && courses.map(course => {
          const isEnrolled = enrolledIds.includes(course.id);
          
          return (
            <div 
              key={course.id} 
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Course Image */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={course.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                  alt={course.title} 
                />
              </div>

              {/* Course Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  Learn industry-leading skills with our expert-led curriculum designed for modern technology standards.
                </p>

                {/* Enroll Button */}
                <button 
                  onClick={() => onEnroll(course.id)}
                  disabled={isEnrolled}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-[2px] transition-all duration-300 flex items-center justify-center gap-2 ${
                    isEnrolled 
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 cursor-default' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:-translate-y-1 active:scale-95'
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <CheckCircle size={18} /> 
                      <span>Enrolled</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll Now</span> 
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
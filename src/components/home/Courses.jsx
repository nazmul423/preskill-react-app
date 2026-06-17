import { CheckCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Courses = ({ courses, onEnroll, enrolledIds }) => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <SectionTitle subtitle="Industry Paths" title="Expert Programs" />
      <div className="grid md:grid-cols-3 gap-8">
        {courses && courses.map(course => (
          <div key={course.id} className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="h-48 overflow-hidden">
              <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt={course.title} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-6 leading-tight">{course.title}</h3>
              <button 
                onClick={() => onEnroll(course.id)}
                disabled={enrolledIds.includes(course.id)}
                className={`w-full py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  enrolledIds.includes(course.id) 
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                  : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                }`}
              >
                {enrolledIds.includes(course.id) ? (
                  <span className="flex items-center justify-center gap-2"><CheckCircle size={14}/> Enrolled</span>
                ) : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
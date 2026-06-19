import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // এটি যোগ করা হয়েছে

const Courses = ({ courses, onEnroll, enrolledIds, limit, showSeeAll }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // অনুবাদ হুক কল করা হয়েছে
  
  // limit থাকলে ৮টি দেখাবে (হোমের জন্য), না থাকলে সব দেখাবে (কোর্স পেজের জন্য)
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-14">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
          {t('expert_programs')} {/* অনুদিত টাইটেল */}
        </h2>
        <div className="w-20 h-1.5 bg-cyan-500 mt-4 rounded-full" />
      </div>
      
      {/* Grid: 4 Columns Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCourses && displayedCourses.map(course => {
          const isEnrolled = enrolledIds.includes(course.id);
          
          return (
            <div 
              key={course.id} 
              className="group relative bg-[#0a101f] border border-white/10 rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Course Image */}
                <div className="h-44 rounded-xl overflow-hidden mb-6 bg-slate-800 relative">
                  <img 
                    src={course.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                    alt={course.title} 
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent opacity-40" />
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight h-14 line-clamp-2">
                  {t(course.title)} {/* কোর্স নামও অনুবাদ হবে যদি i18n এ থাকে */}
                </h3>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => onEnroll(course.id)}
                disabled={isEnrolled}
                className={`w-full py-3.5 rounded-xl text-[11px] font-black uppercase tracking-[1.5px] transition-all duration-300 flex items-center justify-center gap-2 ${
                  isEnrolled 
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                  : 'bg-transparent border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] active:scale-95'
                }`}
              >
                {isEnrolled ? (
                  <>
                    <CheckCircle size={16} /> 
                    <span>{t('enrolled')}</span> {/* অনুদিত টেক্সট */}
                  </>
                ) : (
                  <>
                    <span>{t('enroll_now')}</span> {/* অনুদিত টেক্সট */}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* See All Button - হোমে ৮টি কার্ডের নিচে দেখাবে */}
      {showSeeAll && (
        <div className="mt-20 text-center">
          <button 
            onClick={() => navigate("/courses")}
            className="group relative px-12 py-4 border-2 border-white rounded-full text-white font-bold uppercase text-[11px] tracking-[4px] hover:bg-white hover:text-black transition-all duration-500 inline-flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">{t('see_all_courses')}</span> {/* অনুদিত টেক্সট */}
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Courses;
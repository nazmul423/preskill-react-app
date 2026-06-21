import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Courses = ({ courses, onEnroll, enrolledIds, limit, showSeeAll }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // i18n থেকে language ডিটেক্ট করার জন্য
  
  
  // বর্তমানে ভাষা কি বাংলা (bn)? এটা চেক করা হচ্ছে
  const isBengali = i18n.language === 'bn';

  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-500">
      {/* Section Title */}
      <div className="mb-14">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter transition-colors">
          {t('expert_programs')}
        </h2>
        <div className="w-20 h-1.5 bg-cyan-500 mt-4 rounded-full" />
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCourses && displayedCourses.map(course => {
          const isEnrolled = enrolledIds.includes(course.id);
          
          return (
            <div 
              key={course.id} 
              className="group relative bg-white dark:bg-[#0a101f] border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:border-cyan-500 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Course Image */}
                <div className="h-44 rounded-xl overflow-hidden mb-6 bg-slate-800 relative">
                  <img 
                    src={course.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                    alt={isBengali ? course.titleBn : course.titleEn} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-[#0a101f] via-transparent to-transparent opacity-40" />
                </div>

                {/* Course Title - অটো ল্যাঙ্গুয়েজ সুইচ লজিক */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 group-hover:text-cyan-500 transition-colors leading-tight h-14 line-clamp-2">
                  {/* যদি ওয়েবসাইট বাংলায় থাকে তবে titleBn দেখাবে, নয়তো titleEn */}
                  {isBengali ? course.titleBn : course.titleEn}
                </h3>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => onEnroll(course.id)}
                disabled={isEnrolled}
                className={`w-full py-3.5 rounded-xl text-[11px] font-black uppercase tracking-[1.5px] transition-all duration-300 flex items-center justify-center gap-2 ${
                  isEnrolled 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border border-emerald-500/20' 
                  : 'bg-transparent border border-cyan-600 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-black active:scale-95'
                }`}
              >
                {isEnrolled ? (
                  <>
                    <CheckCircle size={16} /> 
                    <span>{t('enrolled')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('enroll_now')}</span> 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* See All Button */}
      {showSeeAll && (
        <div className="mt-20 text-center">
          <button 
            onClick={() => navigate("/courses")}
            className="group relative px-12 py-4 border-2 border-slate-900 dark:border-white rounded-full text-slate-900 dark:text-white font-bold uppercase text-[11px] tracking-[4px] hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 inline-flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">{t('see_all_courses')}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Courses; 
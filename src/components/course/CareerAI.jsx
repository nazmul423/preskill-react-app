import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { careerDatabase } from '../../data/careerData';
import { Sparkles, TrendingUp, User, BookOpen, GraduationCap, Calendar } from 'lucide-react'; // নতুন আইকন অ্যাড করা হয়েছে

const CareerAI = () => {
  const { t } = useTranslation();
  
  // ১. formData তে degree এবং age যোগ করা হয়েছে
  const [formData, setFormData] = useState({ 
    name: '', 
    interest: Object.keys(careerDatabase)[0],
    degree: '',
    age: ''
  });
  
  const [result, setResult] = useState(null);

  const handleRecommend = (e) => {
    e.preventDefault();
    const selectedPath = formData.interest;
    const data = careerDatabase[selectedPath];

    if (data) {
      const yearlyImpact = (data.contribution * 12 * 1000) / 10000000;
      // রেজাল্টে এখন ইউজারের ডিগ্রি এবং বয়সও সেভ হবে
      setResult({ 
        career: selectedPath, 
        ...data, 
        nationalImpact: yearlyImpact.toFixed(2),
        userDegree: formData.degree,
        userAge: formData.age
      });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#030712] py-20 px-6 border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-2">{t('ai_badge')}</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">AI Career Architect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form Section */}
          <form onSubmit={handleRecommend} className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl space-y-5">
            <div>
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 mb-2">
                <User size={14}/> {t('your_name')}
              </label>
              <input 
                required 
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-all" 
                placeholder="Rahim" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>

            {/* --- নতুন ফিল্ড: Degree --- */}
            <div>
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 mb-2">
                <GraduationCap size={14}/> Your Degree
              </label>
              <input 
                required 
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-all" 
                placeholder="e.g. CSE, BBA, HSC" 
                onChange={(e) => setFormData({...formData, degree: e.target.value})} 
              />
            </div>

            {/* --- নতুন ফিল্ড: Age --- */}
            <div>
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 mb-2">
                <Calendar size={14}/> Your Age
              </label>
              <input 
                required 
                type="number"
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-all" 
                placeholder="24" 
                onChange={(e) => setFormData({...formData, age: e.target.value})} 
              />
            </div>

            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 block mb-2">{t('your_interest')}</label>
              <select 
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none cursor-pointer font-bold" 
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                {Object.keys(careerDatabase).map((career) => (
                  <option key={career} value={career}>{career}</option>
                ))}
              </select>
            </div>

            <button className="w-full bg-slate-900 dark:bg-cyan-500 text-white dark:text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-cyan-400 transition-all uppercase tracking-widest shadow-xl">
              <Sparkles size={18} /> {t('generate_result')}
            </button>
          </form>

          {/* Result Section */}
          <div className="min-h-[520px]">
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl p-10 text-center">
                <Sparkles className="text-slate-300 mb-4 animate-pulse" size={40} />
                <p className="text-slate-400 italic">{t('ai_waiting')}</p>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500 p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-cyan-500 shadow-2xl space-y-6">
                <div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest italic">{formData.name}'s Profile ({result.userAge} Years | {result.userDegree})</span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase mt-1 leading-tight">{result.career}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 dark:bg-black/50 rounded-2xl border border-slate-100 dark:border-white/5">
                    <p className="text-xs uppercase font-bold text-slate-500 mb-2">Salary (Mid-Level)</p>
                    <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400">{result.salary.mid}</p>
                  </div>

                  <div className="p-6 bg-slate-50 dark:bg-black/50 rounded-2xl border border-slate-100 dark:border-white/5">
                    <h4 className="flex items-center gap-2 text-xs uppercase font-bold text-slate-500 mb-3">
                      <BookOpen size={14}/> Top Skills
                    </h4>
                    <div className="flex flex-col gap-2">
                      {result.skills.slice(0,3).map(s => (
                        <span key={s} className="text-sm md:text-base font-black text-slate-800 dark:text-white tracking-tight">
                          #{s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 text-white rounded-2xl border-l-4 border-cyan-500 shadow-lg">
                  <h4 className="flex items-center gap-2 font-black uppercase text-xs mb-3 text-cyan-400">
                    <TrendingUp size={16}/> Economic Impact:
                  </h4>
                  <p className="text-base leading-relaxed opacity-90">
                    {t('impact_msg_start')} <span className="font-black text-cyan-400 underline decoration-cyan-500/50 text-lg">{result.nationalImpact} {t('crore')}</span> {t('impact_msg_end')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAI;
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { careerDatabase } from '../../data/careerData';
import { Sparkles, TrendingUp, User, BookOpen } from 'lucide-react';

const CareerAI = () => {
  const { t } = useTranslation();
  // ডিফল্ট হিসেবে প্রথম ক্যারিয়ারটি সেট করা হয়েছে
  const [formData, setFormData] = useState({ name: '', interest: Object.keys(careerDatabase)[0] });
  const [result, setResult] = useState(null);

  const handleRecommend = (e) => {
    e.preventDefault();
    const selectedPath = formData.interest;
    const data = careerDatabase[selectedPath];

    if (data) {
      // ১০ person এর কন্ট্রিবিউশন ক্যালকুলেশন (কোটি টাকায়)
      const yearlyImpact = (data.contribution * 12 * 1000) / 10000000;
      setResult({ career: selectedPath, ...data, nationalImpact: yearlyImpact.toFixed(2) });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#030712] py-20 px-6 border-b border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-2">{t('ai_badge')}</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">AI Career Architect</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto font-medium">{t('ai_desc')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form Section */}
          <form onSubmit={handleRecommend} className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 mb-3">
                <User size={14}/> {t('your_name')}
              </label>
              <input 
                required 
                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-cyan-500 transition-all" 
                placeholder="Rahim" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 block mb-3">{t('your_interest')}</label>
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
          <div className="min-h-[420px]">
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-3xl p-10 text-center">
                <Sparkles className="text-slate-300 mb-4 animate-pulse" size={40} />
                <p className="text-slate-400 italic">{t('ai_waiting')}</p>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500 p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-cyan-500 shadow-2xl space-y-6">
                <div>
                  <span className="text-cyan-500 font-black text-[10px] uppercase tracking-widest italic">{formData.name}'s Recommended Path</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mt-1 leading-tight">{result.career}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-black/50 rounded-2xl border border-slate-100 dark:border-white/5">
                    <p className="text-[9px] uppercase font-bold text-slate-500 mb-1">Salary (Mid-Level)</p>
                    <p className="text-lg font-black text-cyan-600 dark:text-cyan-400">{result.salary.mid}</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-black/50 rounded-2xl border border-slate-100 dark:border-white/5">
                    <h4 className="flex items-center gap-1 text-[9px] uppercase font-bold text-slate-500 mb-1"><BookOpen size={10}/> Top Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {result.skills.slice(0,3).map(s => <span key={s} className="text-[8px] font-bold text-slate-800 dark:text-zinc-300">#{s}</span>)}
                    </div>
                  </div>
                </div>

                {/* Economic Impact Card */}
                <div className="p-5 bg-slate-900 text-white rounded-2xl border-l-4 border-cyan-500 shadow-lg">
                  <h4 className="flex items-center gap-2 font-black uppercase text-[10px] mb-2 text-cyan-400">
                    <TrendingUp size={14}/> Economic Impact:
                  </h4>
                  <p className="text-[13px] leading-relaxed opacity-90">
                    {t('impact_msg_start')} <span className="font-black text-cyan-400 underline decoration-cyan-500/50">{result.nationalImpact} {t('crore')}</span> {t('impact_msg_end')}
                  </p>
                </div>
                
                <p className="text-[10px] text-slate-400 italic text-center">* Estimates based on 1000 trained professionals.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAI;
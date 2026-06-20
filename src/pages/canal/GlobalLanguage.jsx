import { useTranslation } from 'react-i18next';

const languages = [
  { code: "gb", name: "English" },
  { code: "jp", name: "Japanese" },
  { code: "de", name: "German" },
  { code: "sa", name: "Arabic" },
  { code: "cn", name: "Chinese" },
  { code: "kr", name: "Korean" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

const GlobalLanguage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* টাইটেল সেকশন */}
        <div className="mb-12">
         
          
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
            {t('featured_languages')}
          </h2>
        </div>

        {/* ল্যাঙ্গুয়েজ গ্রিড (২টি করে কলাম) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="group flex items-center gap-6 bg-slate-50 dark:bg-[#0f172a] rounded-[2rem] p-6 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              {/* ব্যাকগ্রাউন্ড হোভার আভা */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* কান্ট্রি ফ্ল্যাগ ইমেজ (High Quality) */}
              <div className="w-16 h-12 shrink-0 rounded-lg overflow-hidden shadow-md border border-white/20 relative z-10">
                <img 
                  src={`https://flagcdn.com/w160/${lang.code}.png`} 
                  alt={lang.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* ল্যাঙ্গুয়েজ নাম */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-cyan-500 transition-colors">
                  {t(lang.name)}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mt-1">
                  Professional Proficiency
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* নিচের টেক্সট */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 dark:text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
            Connecting Bangladesh to the Global Workforce
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalLanguage;
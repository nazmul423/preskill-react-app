import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle'; 
import teachersData from '../data/teachersData'; // পাথ নিশ্চিত করুন

const AllExperts = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle 
          subtitle={t('Experts')} 
          title={t('All Certified Industry Experts')} 
          centered 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-24 mt-20">
          {teachersData && teachersData.map((t_info, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8">
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative w-full h-full bg-slate-100 dark:bg-[#0a0f1d] rounded-full border border-zinc-300 dark:border-zinc-800 border-b-4 border-b-zinc-600 group-hover:border-cyan-500 group-hover:border-b-cyan-400 transition-all duration-500 overflow-hidden p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={t_info.img} alt={t_info.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>
              </div>
              <h4 className="text-slate-900 dark:text-white font-black uppercase text-[12px] md:text-[14px] tracking-widest">{t_info.name}</h4>
              <p className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase mt-1">
                {t_info.role ? t(t_info.role) : ""}
              </p>
              <div className="h-[1px] w-6 bg-zinc-300 dark:bg-zinc-800 mt-5 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllExperts;
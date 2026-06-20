import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';

const CompanyPartners = () => {
  const { t } = useTranslation();

  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_2012.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  ];

  return (
    // মেইন সেকশন: লাইট মোডে সাদা, ডার্ক মোডে ডার্ক ব্লু
    <section className="py-24 px-8 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle 
          subtitle={t('partners_subtitle')} 
          title={t('partners_title')} 
          centered 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {companies.map((company, index) => (
            <div 
              key={index} 
              // কার্ড ডিজাইন: লাইট মোডে হালকা স্লেট ব্যাকগ্রাউন্ড
              className="group relative flex items-center justify-center p-8 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] overflow-hidden"
            >
              {/* ব্যাকগ্রাউন্ড হোভার আভা */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img 
                src={company.logo} 
                alt={company.name} 
                // লোগো ফিল্টার: লাইট মোডে ধূসর, ডার্ক মোডে সাদাটে (brightness-0 invert), হোভারে রঙিন (brightness-100 invert-0)
                className="h-10 md:h-12 w-auto object-contain brightness-0 dark:invert opacity-40 dark:opacity-40 group-hover:brightness-100 group-hover:dark:invert-0 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100"
              />

              {/* নিচের জিঙ্ক বর্ডার: লাইট মোডে স্লেট-৩০০ */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-300 dark:bg-zinc-800 group-hover:bg-cyan-500 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* নিচের টেক্সট: লাইট মোডে স্লেট-৫০০ */}
        <p className="text-slate-500 dark:text-zinc-500 text-center mt-12 text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-300">
          {t('partners_footer')}
        </p>
      </div>
    </section>
  );
};

export default CompanyPartners;
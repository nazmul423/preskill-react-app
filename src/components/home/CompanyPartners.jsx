import { useTranslation } from 'react-i18next'; // অনুবাদ হুক
import SectionTitle from '../common/SectionTitle';

const CompanyPartners = () => {
  const { t } = useTranslation(); // হুক কল

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
    <section className="py-24 px-8 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* টাইটেল সেকশন - অনুবাদ সহ */}
        <SectionTitle 
          subtitle={t('partners_subtitle')} 
          title={t('partners_title')} 
          centered 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100"
              />

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800 group-hover:bg-cyan-500 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* নিচের টেক্সট - অনুবাদ সহ */}
        <p className="text-zinc-500 text-center mt-12 text-[11px] uppercase tracking-[0.3em] font-bold">
          {t('partners_footer')}
        </p>
      </div>
    </section>
  );
};

export default CompanyPartners;
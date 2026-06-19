import { useTranslation } from 'react-i18next'; // অনুবাদ হুক ইম্পোর্ট করুন

const ContactSection = () => {
  const { t } = useTranslation(); // হুক কল করুন

  return (
    <section className="py-24 px-8 max-w-4xl mx-auto">
      <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 text-center shadow-2xl relative overflow-hidden">
        
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full" />
        
        {/* টেক্সটগুলো অনুবাদ করা হয়েছে */}
        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
          {t('contact_title')}
        </h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
          {t('contact_desc')}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder={t('contact_placeholder')} 
            className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-cyan-500 sm:w-80 text-sm transition-all" 
          />
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-8 py-4 rounded-xl uppercase text-xs tracking-widest transition-all">
            {t('contact_btn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
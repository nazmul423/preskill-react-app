import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-8 max-w-4xl mx-auto transition-colors duration-500">
      {/* কার্ড কন্টেইনার: লাইট মোডে হালকা ধূসর ব্যাকগ্রাউন্ড, ডার্ক মোডে আপনার সেই আগের ব্ল্যাক গ্রেডিয়েন্ট */}
      <div className="p-12 rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-black border border-slate-200 dark:border-white/10 text-center shadow-2xl relative overflow-hidden transition-all duration-500">
        
        {/* ব্যাকগ্রাউন্ড গ্লো - ডার্ক মোডে বেশি দৃশ্যমান থাকবে */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
        
        {/* টাইটেল: লাইট মোডে স্লেট-৯০০ এবং ডার্ক মোডে সাদা */}
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter transition-colors duration-500">
          {t('contact_title')}
        </h2>

        {/* সাবটাইটেল: লাইট মোডে স্লেট-৬০০ */}
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto leading-relaxed transition-colors duration-500">
          {t('contact_desc')}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          {/* ইনপুট ফিল্ড: লাইট মোডে ধূসর ব্যাকগ্রাউন্ড এবং ডার্ক টেক্সট */}
          <input 
            type="email" 
            placeholder={t('contact_placeholder')} 
            className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 px-6 py-4 rounded-xl outline-none focus:border-cyan-500 text-slate-900 dark:text-white sm:w-80 text-sm transition-all" 
          />
          
          {/* বাটন: সব মোডে একই কালার (আপনার সিগনেচার সায়ান) থাকবে */}
          <button className="bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-black font-black px-8 py-4 rounded-xl uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95">
            {t('contact_btn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
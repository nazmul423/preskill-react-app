import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    // মেইন কন্টেইনার
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-zinc-800 pt-24 pb-12 px-8 relative overflow-hidden transition-colors duration-500">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/5 dark:bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Column 1: Stylized Logo & Socials */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter leading-none transition-colors">
                  PRE<span className="text-cyan-500">FUTURE</span>
                </span>
                <span className="text-[10px] tracking-[0.5em] font-bold text-slate-500 dark:text-zinc-600 uppercase mt-2">
                  {t('footer_foundation')}
                </span>
              </div>
            </Link>
            
            <p className="text-slate-600 dark:text-zinc-500 text-sm leading-relaxed transition-colors">
              {t('footer_desc')}
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-500 hover:text-blue-600 hover:border-blue-600/50 hover:shadow-xl transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-500 hover:text-cyan-500 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-500 hover:text-emerald-500 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
         <div>
  <h4 className="text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-l-4 border-cyan-500 pl-4 transition-colors">
    {t('footer_paths')}
  </h4>
  <ul className="space-y-4">
    {[
      'AGI', 
      'Autonomous Systems', 
      'Quantum Computing', 
      'Edge Computing', 
      'Robotics'
    ].map((item) => (
      <li key={item}>
        <Link to="#" className="text-slate-600 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm flex items-center gap-2 group transition-all">
          <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          {t(item)}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-l-4 border-cyan-500 pl-4 transition-colors">
              {t('footer_touch')}
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-600 dark:text-zinc-500 text-sm">
                <MapPin size={22} className="text-cyan-500 shrink-0" />
                <span className="leading-relaxed">{t('footer_address')}</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600 dark:text-zinc-500 text-sm group cursor-pointer hover:text-cyan-600 dark:hover:text-white transition-colors">
                <Mail size={20} className="text-cyan-500 shrink-0" />
                <span>support@prefuture.skill</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600 dark:text-zinc-500 text-sm group cursor-pointer hover:text-cyan-600 dark:hover:text-white transition-colors">
                <Phone size={20} className="text-cyan-500 shrink-0" />
                <span>+88 01727642607 </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-l-4 border-cyan-500 pl-4 transition-colors">
              {t('footer_newsletter')}
            </h4>
            <p className="text-slate-600 dark:text-zinc-500 text-sm mb-8 leading-relaxed transition-colors">
              {t('footer_news_desc')}
            </p>
            <div className="relative overflow-hidden rounded-xl border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/30 p-1 group focus-within:border-cyan-500 transition-all">
              <input 
                type="email" 
                placeholder={t('footer_news_placeholder')} 
                className="w-full bg-transparent px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none" 
              />
              <button className="absolute right-1 top-1 bottom-1 bg-cyan-600 hover:bg-cyan-500 text-black px-6 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all">
                {t('footer_news_btn')}
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left transition-colors">
            © 2026 PreFuture Skill Foundation • Empowering Excellence
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-slate-500 dark:text-zinc-700 uppercase tracking-widest transition-colors">
            <Link to="#" className="hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors">{t('footer_privacy')}</Link>
            <Link to="#" className="hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors">{t('footer_terms')}</Link>
          </div>
        </div>

        {/* নতুন যোগ করা অংশ: Proposed By */}
        <div className="mt-5 mb-5 pt-8 border-t border-slate-100 dark:border-zinc-900/50 text-center">
          <p className="text-[11px] font-bold text-slate-400 dark:text-zinc-600 tracking-[0.2em] uppercase">
            Proposed by <span className="text-cyan-600 dark:text-cyan-500/80">Surendra Kumar Govt Girls' High School, Manikganj</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
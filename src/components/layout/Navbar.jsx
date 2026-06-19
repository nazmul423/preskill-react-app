import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import navLinks from '../../data/navLinks';
import ImgBd from '../../assets/bd.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'jp', name: 'Japanese', flag: '🇯🇵' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
  ];

  const formatName = (name) => {
    const translatedName = t(name);
    if (translatedName.startsWith("1.")) {
      return (
        <>
          <span className="text-cyan-500 mr-1 font-black animate-pulse">1.</span>
          {translatedName.replace("1.", "")}
        </>
      );
    }
    return translatedName;
  };

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* --- ১. টপ স্লোগান বার (ডিজাইন একদম সেম) --- */}
      <div className="bg-[#020617] border-b border-white/5 py-1.5 flex justify-center items-center overflow-hidden">
        <span className="relative px-6 py-0.5 rounded-full font-extrabold text-white text-[11px] md:text-[12px] 
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
          shadow-[0_0_15px_rgba(236,72,153,0.3)] animate-pulse uppercase tracking-wider">
          সবার আগে বাংলাদেশ 🇧🇩
          <span className="absolute inset-0 bg-white/10 blur-xl opacity-40 pointer-events-none"></span>
        </span>
      </div>

      {/* --- ২. মেইন নেভিবার (ডিজাইন একদম সেম) --- */}
      <nav className="bg-[#0b101b]/95 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
        <div className="w-[92%] lg:w-[85%] mx-auto flex items-center justify-between h-full relative">
          
          {/* লোগো সেকশন */}
          <div className="flex items-center gap-2 shrink-0">
            <img src={ImgBd} alt="logo" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
            <Link to="/" className="text-white font-black text-lg lg:text-xl tracking-tighter uppercase whitespace-nowrap">
              PRE <span className="text-cyan-400">FUTURE</span>
            </Link>
          </div>

          {/* ডেক্সটপ মেনু (সেন্টার এলাইনমেন্ট ঠিক রাখা হয়েছে) */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-5 px-4 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/l1 h-20 flex items-center">
                <Link to={link.path || "#"} className="flex items-center gap-1 text-[12px] font-bold text-slate-300 hover:text-cyan-400 uppercase tracking-widest transition-all whitespace-nowrap">
                  {formatName(link.name)}
                  {link.children && <ChevronDown size={14} className="opacity-40" />}
                </Link>

                {/* লেভেল ১ ড্রপডাউন (Side-by-side logic intact) */}
                {link.children && (
                  <ul className="absolute top-full left-0 mt-0 hidden group-hover/l1:block bg-[#0b101b] border border-white/10 min-w-[250px] shadow-2xl py-2 animate-in fade-in slide-in-from-top-1">
                    {link.children.map((sub) => (
                      <li key={sub.name} className="relative group/l2 border-b border-white/5 last:border-0">
                        <div className="flex items-center justify-between px-5 py-3.5 hover:bg-zinc-900 cursor-pointer">
                          <Link to={sub.path || "#"} className="text-white text-[13px] font-bold w-full">{t(sub.name)}</Link>
                          {sub.children && <ChevronRight size={14} className="text-zinc-500" />}
                        </div>

                        {/* লেভেল ২ ফ্লাইআউট (ডানে খুলবে) */}
                        {sub.children && (
                          <ul className="absolute top-0 left-full ml-[1px] hidden group-hover/l2:block bg-[#0f172a] border border-white/10 min-w-[220px] shadow-2xl py-2">
                            {sub.children.map((child) => (
                              <li key={child.name} className="relative group/l3 border-b border-white/5 last:border-0 flex justify-between items-center px-5 py-2.5 hover:bg-zinc-800 cursor-pointer transition-colors">
                                <Link to={child.path || "#"} className="text-slate-300 hover:text-white text-[12px] font-semibold w-full">{t(child.name)}</Link>
                                {child.children && <ChevronRight size={12} className="text-zinc-600" />}

                                {/* লেভেল ৩ ফ্লাইআউট (আরও ডানে খুলবে) */}
                                {child.children && (
                                  <ul className="absolute top-0 left-full ml-[1px] hidden group-hover/l3:block bg-[#1a202c] border border-white/10 min-w-[200px] py-2 shadow-2xl">
                                    {child.children.map((deepItem) => (
                                      <li key={deepItem.name} className="px-5 py-2 hover:bg-black transition-colors">
                                        <Link to={deepItem.path || "#"} className="text-[11px] text-slate-500 hover:text-cyan-400 block w-full whitespace-nowrap">
                                          {t(deepItem.name)}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* রাইট সেকশন (Language Switcher) */}
          <div className="flex items-center gap-4 h-full shrink-0">
            <div className="hidden lg:flex items-center relative group/lang border-l border-white/10 pl-4 h-full">
              <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 font-black transition-all">
                <Globe size={18} className="text-cyan-400" />
                <span className="text-[11px] uppercase">
                  {i18n.language ? i18n.language.split('-')[0] : 'en'}
                </span>
              </button>
              <div className="absolute top-full right-0 mt-0 hidden group-hover/lang:block bg-[#0b101b] border border-white/10 min-w-[130px] shadow-2xl py-2">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => i18n.changeLanguage(l.code)} className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 transition-all font-bold">
                    <span>{l.flag}</span> {l.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setIsMobileOpen(true)} className="lg:hidden text-white p-2 hover:text-cyan-400">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- ৩. মোবাইল ড্রয়ার (ডিজাইন একদম সেম) --- */}
      <div className={`fixed inset-0 bg-[#0b101b] z-[200] transform transition-transform duration-500 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden overflow-y-auto`}>
        <div className="p-6 pb-20">
          <div className="flex justify-between items-center mb-10">
            <span className="text-cyan-400 font-black tracking-widest text-lg uppercase italic">Menu</span>
            <button onClick={() => setIsMobileOpen(false)} className="text-white hover:text-red-500"><X size={32} /></button>
          </div>

          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/5 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenMobileSub(openMobileSub === link.name ? null : link.name)}>
                  <Link to={link.path || "#"} onClick={() => !link.children && setIsMobileOpen(false)} className="text-[16px] font-bold text-white uppercase italic tracking-wider">
                    {formatName(link.name)}
                  </Link>
                  {link.children && <ChevronDown size={20} className={`text-zinc-500 transition-transform ${openMobileSub === link.name ? 'rotate-180' : ''}`} />}
                </div>

                {link.children && openMobileSub === link.name && (
                  <ul className="mt-4 ml-4 space-y-4 border-l border-cyan-500/30 pl-4">
                    {link.children.map(sub => (
                      <li key={sub.name} className="mb-4">
                        <div className="text-zinc-300 font-semibold text-[14px] mb-2">{t(sub.name)}</div>
                        {sub.children && (
                          <ul className="ml-4 space-y-2 border-l border-white/10 pl-4">
                             {sub.children.map(child => (
                               <li key={child.name} className="text-zinc-500 text-[12px] py-1">
                                 <Link to={child.path || "#"} onClick={() => setIsMobileOpen(false)}>{t(child.name)}</Link>
                               </li>
                             ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            <li className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
               {languages.map(l => (
                 <button key={l.code} onClick={() => {i18n.changeLanguage(l.code); setIsMobileOpen(false)}} className={`px-4 py-2 border rounded-lg font-bold text-xs ${i18n.language === l.code ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'border-white/10 text-zinc-500'}`}>
                   {l.flag} {l.name}
                 </button>
               ))}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
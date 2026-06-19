
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
  ];

  return (
    <div className="relative group/lang ml-4">
      <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 font-bold transition-all">
        <Globe size={18} className="text-cyan-400" />
        <span className="text-[12px] uppercase">{i18n.language.split('-')[0]}</span>
      </button>

      {/* ড্রপডাউন */}
      <div className="absolute top-full right-0 mt-2 bg-[#0b101b] border border-white/10 rounded-lg hidden group-hover/lang:block shadow-2xl py-2 min-w-[140px] z-[100]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="w-full flex items-center gap-3 px-4 py-2 text-[13px] text-slate-300 hover:bg-white/5 hover:text-cyan-400 transition-all"
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
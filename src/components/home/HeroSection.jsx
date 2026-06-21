import { useTranslation } from 'react-i18next';
import PreSkillImg from '../../assets/image (1).png';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // মেইন কন্টেইনার: লাইট মোডে সাদা, ডার্ক মোডে নেভি ব্লু
    <section className="relative h-screen w-full overflow-hidden bg-black dark:bg-[#030712] transition-colors duration-700">

      {/* Background Image: লাইট এবং ডার্ক উভয় মোডে একদম একই (ডার্ক লুক) রাখা হয়েছে */}
     {/* Background Image */}
{/* Background Image */}
<img
  src={PreSkillImg}
  alt="PreSkill Banner"
  className="absolute inset-0 w-full h-full object-cover opacity-30"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black/50 dark:bg-black/50"></div>


      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">

  {/* টাইটেল: গ্লাস ইফেক্ট এবং ট্রান্সপারেন্ট টেক্সট */}
  <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 text-6xl md:text-6xl font-bold shadow-2xl leading-tight drop-shadow-sm transition-all duration-500">
    {t('hero_title')}
  </h1>

  {/* সাবটাইটেল: ফ্রস্টেড লুক এবং হাই রিডাবিলিটি */}
  <p className="mt-6 text-white/90 text-xl md:text-2xl max-w-5xl font-medium leading-relaxed transition-colors duration-500">
    <span className="bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm">
      {t('hero_subtitle')}
    </span>
  </p>

        {/* ১. মেইন সাকসেস বাটন (সব মোডে একই প্রফেশনাল ডিজাইন) */}
        <button
          className="
            mt-12 rounded-full px-10 py-4 text-lg font-black
            uppercase tracking-[2px]
            bg-slate-900 text-white
            border-[3px] border-cyan-500
            shadow-[0_0_25px_rgba(6,182,212,0.3)]
            transition-all duration-300
            hover:bg-cyan-500 hover:text-black
            hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
            hover:scale-105 active:scale-95
          "
        >
          {t('hero_btn_success')}
        </button>

        {/* ২. নিচের বাটন সেট (সব মোডে একই লুক) */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {/* Explore Button */}
          <button
            className="
              px-10 py-3 rounded-xl font-black uppercase text-sm tracking-widest
              bg-gradient-to-r from-cyan-500 to-blue-600
              text-white
              shadow-[0_0_25px_rgba(6,182,212,0.4)]
              hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
              transition-all duration-300
            "
          >
            {t('hero_btn_explore')}
          </button>

          {/* Learn More Button */}
          <button
            className="
              px-10 py-3 rounded-xl font-black uppercase text-sm tracking-widest
              border border-cyan-500/30
              text-white
              bg-slate-900 hover:bg-slate-800
              shadow-[0_0_20px_rgba(6,182,212,0.25)]
              transition-all duration-300
              hover:scale-105
            "
          >
            {t('hero_btn_learn')}
          </button>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
import { useTranslation } from 'react-i18next';
import PreSkillImg from '../../assets/image (1).png';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // মেইন কন্টেইনার: লাইট মোডে সাদা, ডার্ক মোডে নেভি ব্লু
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-700">

      {/* Background Image: লাইট এবং ডার্ক উভয় মোডে একদম একই (ডার্ক লুক) রাখা হয়েছে */}
      <img
        src={PreSkillImg}
        alt="PreSkill Banner"
        className="absolute inset-0 w-full h-full object-cover 
          opacity-80 
          transition-all duration-700"
      />

      {/* ডাইনামিক ওভারলে: ডার্ক মোডের সেই সিগনেচার ইফেক্ট সব মোডে রাখা হয়েছে যাতে ইমেজ একই দেখায় */}
      <div
        className="absolute inset-0
        bg-gradient-to-r from-black/60 via-black/20 to-transparent
        dark:from-[#030712]/80 dark:via-[#030712]/40 dark:to-transparent
        z-10 backdrop-blur-[1px] transition-all duration-700"
      ></div>

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">

        {/* টাইটেল: লাইট মোডে স্লেট-৯৫৬ (হাই কন্ট্রাস্ট) এবং ডার্ক মোডে সাদা */}
       <h1 className="text-white dark:text-white text-4xl md:text-6xl font-black leading-tight max-w-6xl drop-shadow-lg transition-colors duration-500">
  {t('hero_title')}
</h1>

  <p className="mt-6 text-white-800 dark:text-slate-100 text-xl md:text-2xl max-w-5xl font-bold leading-relaxed transition-colors duration-500">
  {t('hero_subtitle')}
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
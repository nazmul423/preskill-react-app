import { useTranslation } from 'react-i18next';
import PreSkillImg from '../../assets/PreSkill.jpeg';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // মেইন কন্টেইনার: লাইট মোডে সাদা, ডার্ক মোডে নেভি ব্লু
    <section className="relative h-screen w-100% overflow-hidden dark:bg-[#030712] transition-colors duration-700">
      {/* --- BACKGROUND WITH INTENSE SIDE DARKNESS (SAME TO SAME PHOTO) --- */}

      <div className="">
        {/* ১. মূল ব্যাকগ্রাউন্ড ইমেজ */}
        <img
          src={PreSkillImg}
          alt="PreSkill Banner"
          className="w-full h-full object-cover opacity-80 bg-black/20 "
        />




      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 mt-20">

<h1
  className="
    text-white dark:text-white
    text-xl md:text-4xl
    font-black
    leading-tight
    max-w-6xl
    transition-all duration-300

    hover:scale-105
    hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]
    cursor-default
    
    backdrop-blur-xl
    border border-white/10
    rounded-3xl
    px-4 py-2
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
>
  {t('hero_title')}
</h1>

 <p
  className="
    mt-4
    text-white
    text-xl md:text-2xl
    max-w-5xl
    font-bold
    leading-relaxed
    transition-all duration-500
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
>
  {t('hero_subtitle')}
</p>

        {/* ১. মেইন সাকসেস বাটন (সব মোডে একই প্রফেশনাল ডিজাইন) */}
<button
  className="
    mt-8
    px-8 py-3 
    rounded-full 
    font-black uppercase tracking-widest
    /* আপনার দেওয়া মেইন ব্লু এবং বর্ডার */
    bg-purple-200/10 bg-mauve-400
    border-2 border-cyan-400
    text-white
    
    /* হালকা গ্লো শ্যাডো */
    shadow-[0_0_20px_rgba(6,182,212,0.3)]
    
    /* সিম্পল ট্রানজিশন */
    transition-all duration-300
    hover:scale-105 
    hover:bg-cyan-600 
    hover:border-white
    hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]
    active:scale-95
  "
>
  {t('hero_btn_success')}
</button>

  <div className="flex flex-wrap justify-center gap-6 mt-12">
    
    {/* Explore Courses - Glass Style */}
    <button
      className="
        px-3 py-3 rounded-xl font-bold uppercase text-sm tracking-widest
        bg-white/10 backdrop-blur-sm
        text-white border border-blue-400
        hover:bg-white/20 hover:border-cyan-400
        shadow-xl transition-all duration-300 outline-blue-400
      "
    >
      {t('hero_btn_explore')}
    </button>

    {/* Learn More - Outline Style */}
    <button
      className="
        px-6 py-3 rounded-xl font-bold uppercase text-sm tracking-widest
        text-cyan-400 border-2 border-cyan-500/50
        bg-white/10 backdrop-blur-lg
        transition-all duration-300
      "
    >
      {t('hero_btn_learn')}
    </button>
    
  </div>

        {/* ২. নিচের বাটন সেট (সব মোডে একই লুক) */}


      </div>

    </section>
  );
};

export default HeroSection;
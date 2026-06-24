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
          className="w-full h-full object-cover opacity-80 "
        />




      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 mt-35">

<h1
  className="
    text-white dark:text-white
    text-7xl md:text-5xl
    font-black
    leading-tight
    max-w-6xl
    transition-all duration-300

    hover:scale-105
    hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]
    cursor-default
  "
>
  {t('hero_title')}
</h1>

 <p
  className="
    mt-4
    text-white
    text-2xl md:text-2xl
    max-w-5xl
    font-bold
    leading-relaxed
    transition-all duration-500

    bg-gradient-to-br
    from-white/10
    to-white/5
    backdrop-blur-2xl
    border border-white/10
    rounded-3xl
    px-4 py-2
    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
>
  {t('hero_subtitle')}
</p>

        {/* ১. মেইন সাকসেস বাটন (সব মোডে একই প্রফেশনাল ডিজাইন) */}
        <button
          className="
            mt-12 rounded-full px-12 py-4 text-xl font-black
            uppercase tracking-[2px]
            bg-slate-900 text-white
            border-[3px] border-cyan-500
            shadow-[0_0_25px_rgba(6,182,212,0.3)]
            transition-all duration-300
            hover:bg-cyan-500 hover:text-white
            hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
            hover:scale-105 active:scale-95
          "
        >
          {t('hero_btn_success')}
        </button>
           <div className="flex flex-wrap justify-center gap-6 mt-12">

         <button
            className="
              px-8 py- rounded-xl font-black uppercase text-sm tracking-widest
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
             px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest
              bg-gradient-to-r from-cyan-500 to-blue-600
              text-white
              shadow-[0_0_25px_rgba(6,182,212,0.4)]
              hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
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
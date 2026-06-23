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
          className="w-full h-full object-cover "
        />




      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 mt-40">

        {/* টাইটেল: গ্লাস ইফেক্ট এবং ট্রান্সপারেন্ট টেক্সট */}
        <h1 className="text-transparent
         bg-clip-text bg-gradient-to-br from-white via-white/100 to-white/100 
         text-10md md:text-10md 
        font-bold shadow-2md 
        leading-tight drop-shadow-sm 
        transition-all 
        duration-500">
          {t('hero_title')}
        </h1>

        {/* সাবটাইটেল: ফ্রস্টেড লুক এবং হাই রিডাবিলিটি */}
        <p className="mt-2 text-white/90 text-md md:text-1md max-w-2md font-medium leading-relaxed transition-colors duration-500">
          {/* <span className="bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm"> */}
          {t('hero_subtitle')}
          {/* </span> */}
        </p>

        {/* ১. মেইন সাকসেস বাটন (সব মোডে একই প্রফেশনাল ডিজাইন) */}
        <button
          className="
            mt-4 rounded-full px-4 py-2 text-sm font-bold
            uppercase tracking-[1px]
            bg-slate-900 text-white
            border-[3px] border-cyan-500
            shadow-[0_0_25px_rgba(6,182,212,0.3)]
            transition-all duration-300
            hover:bg-fuchsia-300 hover:text-black
            hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
            hover:scale-105 active:scale-95
          "
        >
          {t('hero_btn_success')}
        </button>

        {/* ২. নিচের বাটন সেট (সব মোডে একই লুক) */}


      </div>

    </section>
  );
};

export default HeroSection;
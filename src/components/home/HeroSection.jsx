import { useTranslation } from 'react-i18next'; // এটি যোগ করুন
import PreSkillImg from '../../assets/PreSkill.jpeg';
import Button from '../common/Button';

const HeroSection = () => {
  const { t } = useTranslation(); // অনুবাদ হুক

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={PreSkillImg}
        alt="PreSkill Banner"
        className="absolute inset-0 w-full h-full object-cover blur-1xl"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/75 to-[#030712]/50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-6xl drop-shadow-2xl">
          {t('hero_title')} {/* অনুদিত টাইটেল */}
        </h1>

        <p className="mt-6 text-slate-100 text-xl md:text-3xl max-w-6xl leading-relaxed drop-shadow-xl">
          {t('hero_subtitle')} {/* অনুদিত সাবটাইটেল */}
        </p>

        <Button
          variant="outline"
          className="mt-5 border-cyan-400 text-cyan-300 hover:bg-cyan-400 rounded-full px-8 py-4 text-lg font-bold"
        >
          {t('hero_btn_success')} {/* অনুদিত বাটন টেক্সট */}
        </Button>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <Button>{t('hero_btn_explore')}</Button>
          <Button variant="outline">{t('hero_btn_learn')}</Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
import { useTranslation } from 'react-i18next'; // অনুবাদ হুক
import SectionTitle from '../common/SectionTitle';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Rafiqul Islam",
      role: t('testi_role_cloud'), 
      company: "Google",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: t('testi_text_1')
    },
    {
      name: "Farhana Yasmin",
      role: t('testi_role_cyber'),
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: t('testi_text_2')
    },
    {
      name: "Tanvir Hossain",
      role: t('testi_role_software'),
      company: "Brain Station 23",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: t('testi_text_3')
    },
    {
      name: "Nusrat Jahan",
      role: t('testi_role_data'),
      company: "TigerIT Bangladesh",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: t('testi_text_4')
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          subtitle={t('testi_subtitle')} 
          title={t('testi_title')} 
          centered 
        />

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {reviews.map((review, i) => (
            <div key={i} className="group relative p-10 bg-zinc-900/40 border border-zinc-800 border-b-4 border-b-zinc-700 hover:border-cyan-500/50 hover:border-b-cyan-500 transition-all duration-500 rounded-2xl shadow-2xl flex flex-col h-full">
              <div className="absolute top-8 right-10 text-zinc-800 group-hover:text-cyan-500/20 transition-colors duration-500">
                <Quote size={60} strokeWidth={1} />
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={14} className="fill-cyan-500 text-cyan-500" />
                ))}
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed italic mb-10 relative z-10 font-medium flex-grow">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-zinc-800 group-hover:border-cyan-500 transition-all overflow-hidden p-0.5">
                    <img src={review.image} alt={review.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-white font-black uppercase text-[12px] tracking-widest">{review.name}</h5>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase mt-1">{review.role}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <p className="text-zinc-600 text-[9px] uppercase font-black tracking-tighter mb-1">{t('placed_at')}</p>
                  <span className="text-cyan-400 font-black text-[14px] tracking-tighter uppercase italic opacity-60 group-hover:opacity-100 transition-opacity">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            {t('alumni_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
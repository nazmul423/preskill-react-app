import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Rafiqul Islam",
      role: t('testi_role_cloud'), 
      company: "Google",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvarYMiYAp8HfDjwB1MGO_Go11tPBesmdZkt2nDF6Yw&s=10",
      text: t('testi_text_1')
    },
    {
      name: "Farhana Yasmin",
      role: t('testi_role_cyber'),
      company: "Amazon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DEldq_KDyA-I7fYE4OrmylPnyCvADSzSPEWylAVHvA&s=10",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6akHJKPR-kkqVPbre2IxCtx1HsLTo1EDmbjwJyWorZg&s=10",
      text: t('testi_text_4')
    }
  ];

  return (
    // মেইন সেকশন: লাইট মোডে সাদা, ডার্ক মোডে নেভি ব্লু
    <section className="py-24 px-8 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-500">
      
      {/* ব্যাকগ্রাউন্ড গ্লো - লাইট মোডে আরও হালকা করা হয়েছে */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          subtitle={t('testi_subtitle')} 
          title={t('testi_title')} 
          centered 
        />

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 border-b-4 border-b-slate-300 dark:border-b-zinc-700 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:border-b-cyan-500 transition-all duration-500 rounded-2xl shadow-xl dark:shadow-2xl flex flex-col h-full"
            >
              {/* Quote Icon: লাইট মোডে হালকা গ্রে */}
              <div className="absolute top-8 right-10 text-slate-200 dark:text-zinc-800 group-hover:text-cyan-500/20 transition-colors duration-500">
                <Quote size={60} strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={14} className="fill-cyan-500 text-cyan-500" />
                ))}
              </div>

              {/* রিভিউ টেক্সট: লাইট মোডে স্লেট-৭০০ */}
              <p className="text-slate-700 dark:text-zinc-400 text-lg leading-relaxed italic mb-10 relative z-10 font-medium flex-grow transition-colors duration-300">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-slate-200 dark:border-zinc-800 group-hover:border-cyan-500 transition-all overflow-hidden p-0.5 shadow-sm">
                    <img src={review.image} alt={review.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    {/* নাম: লাইট মোডে স্লেট-৯০০ */}
                    <h5 className="text-slate-900 dark:text-white font-black uppercase text-[12px] tracking-widest transition-colors">{review.name}</h5>
                    <p className="text-slate-500 dark:text-zinc-500 text-[10px] font-bold uppercase mt-1">{review.role}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <p className="text-slate-400 dark:text-zinc-600 text-[9px] uppercase font-black tracking-tighter mb-1">{t('placed_at')}</p>
                  <span className="text-cyan-600 dark:text-cyan-400 font-black text-[14px] tracking-tighter uppercase italic opacity-70 dark:opacity-60 group-hover:opacity-100 transition-opacity">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* নিচের বাটন: লাইট মোডে স্লেট বর্ডার */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-slate-200 dark:border-zinc-800 rounded-full text-slate-500 dark:text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all shadow-sm">
            {t('alumni_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
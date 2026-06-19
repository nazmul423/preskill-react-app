import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';

const TeachersSection = () => {
  const { t } = useTranslation();

  const teachers = [
    { 
      name: "Tanvir Ahmed", 
      role: t('role_ai'), 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
    },
    { 
      name: "Nusrat Jahan", 
      role: t('role_cyber'), 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
    },
    { 
      name: "Faisal Rahman", 
      role: t('role_software'), 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
    },
    { 
      name: "Sumaiya Khan", 
      role: t('role_data'), 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle={t('mentors_subtitle')} 
          title={t('mentors_title')} 
          centered 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
          {teachers.map((t, i) => (
            <div key={i} className="text-center group cursor-pointer flex flex-col items-center">
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-8">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-full h-full bg-slate-800 rounded-full border-2 border-white/10 group-hover:border-cyan-500 group-hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>

              <h4 className="text-white font-bold uppercase text-[13px] tracking-widest group-hover:text-cyan-400 transition-colors">
                {t.name}
              </h4>
              
              {/* এখানে ভুল ছিল: p ট্যাগ শেষ করতে হবে </p> দিয়ে */}
              <p className="text-slate-500 text-[10px] mt-2 font-black uppercase tracking-tighter">
                {t.role}
              </p>
              
              <div className="w-8 h-[1px] bg-white/10 mx-auto mt-4 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
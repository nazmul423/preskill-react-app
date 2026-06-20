
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';

const TeachersSection = () => {
  const { t } = useTranslation();

  const teachers = [
    { 
      name: "Tanvir Ahmed", 
      role: t('role_ai'), 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRH95R9E6yikzUWdx2wBaFt7i8oYa4P59a7eHiuHxtH7G86A4S3flM6U4&s=10" 
    },
    { 
      name: "Nusrat Jahan", 
      role: t('role_cyber'), 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicsuKyjetAgNQa06XkHVYCJ5XXB9xhopYBGXxEG1KEw&s=10" 
    },
    { 
      name: "Faisal Rahman", 
      role: t('role_software'), 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpSUe7WEW-UvrYxu4L9aYN7VFeG4zFCjphKrKEJnX6A&s=10" 
    },
    { 
      name: "Sumaiya Khan", 
      role: t('role_data'), 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96wBbitEsZgOLA9dHhlAYwpIBWP-EPlqMJ7lGqIJRQ&s=10" 
    },
    
  ];

  return (
    // মেইন সেকশন: লাইট মোডে সাদা (bg-white), ডার্ক মোডে ডার্ক ব্লু
    <section className="py-24 px-8 bg-white dark:bg-[#020617] transition-colors duration-500">
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
                {/* হোভার গ্লো ইফেক্ট */}
                <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* ইমেজ সার্কেল: লাইট মোডে হালকা স্লেট বর্ডার */}
                <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-white/10 group-hover:border-cyan-500 group-hover:scale-105 transition-all duration-500 overflow-hidden shadow-xl dark:shadow-2xl">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>

              {/* নাম: লাইট মোডে স্লেট-৯০০ এবং ডার্ক মোডে সাদা */}
              <h4 className="text-slate-900 dark:text-white font-bold uppercase text-[13px] tracking-widest group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {t.name}
              </h4>
              
              {/* রোল: লাইট মোডে স্লেট-৬০০ */}
              <p className="text-slate-600 dark:text-slate-500 text-[10px] mt-2 font-black uppercase tracking-tighter transition-colors duration-300">
                {t.role}
              </p>
              
              {/* ডেকোরেটিভ লাইন: লাইট মোডে স্লেট-২০০ */}
              <div className="w-8 h-[1px] bg-slate-200 dark:bg-white/10 mx-auto mt-4 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
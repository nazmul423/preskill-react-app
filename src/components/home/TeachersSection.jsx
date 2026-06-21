import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';

// ১. ডাটা লিস্টটি কম্পোনেন্টের বাইরে (Top Level) রাখতে হবে
  const teachers = [
    { name: "Md. Mafidul I.", role: " HCM | API | Integration | FinanceAI ", img: "https://www.upwork.com/profile-portraits/c1b__4QuMTGcKHhx5pPlMD4JQ6UXgDxCQa_ow6xbTINjIv8isL0v7ru7kk5NDfuEgq" },
    { name: "Nusrat Jahan", role: "Cyber Security Lead", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8kcVirgFuevGsWoWhZRw0sB_gC2MIUx99ZyzQ-1h-w&s=10" },
    { name: "Ariful Islam", role: "Cloud Architect", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Oyd8iExQ9v0uwKbp0IXVVAAwa5CdoV9-3bCsUqlJ_g&s=10" },
    { name: "Sadia Afrin", role: "UI/UX Design Lead", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIY31vSya_3etxF53u-q7Drqnn4J0dLmn7pp1c9nvHw&s=10" },
    { name: "Faisal Rahman", role: "DevOps Engineer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32muZIGkmDjDKSdwwyBnIlLWc87QachC6gQQdQXQTnA&s=10" },
    { name: "Sumaiya Khan", role: "Data Scientist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW4WTUsQju84PdpPAomMtnmUoApLBywxINN8gMhcOeA&s=10" },
    { name: "Mehidi Hasan", role: "Full Stack Developer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYTC0A6-8I16OkGPLGTaP6bFd_kxMxH7WLfFaQgsllg&s=10" },
    { name: "Tasmia Haque", role: "Blockchain Expert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10cYJoTxyvoQCE8G72UdZhS1VWYZgujiFhAfDfg5lrw&s=10" },
    {
  name: "Tanvir Ahmed",
  role: ("role_sap"),
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxHa0yeJU9592LYTvy_iczW2EwYDkbx4AaMbvKgHzfw&s=10"
},
{
  name: "Karim",
  role: ("role_workday"),
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FwlHuCiNYWrh_yPA8yUZVM9Fgyq-qA81vYVKk-2FNQ&s=10"
},
{
  name: "Kamal",
  role: ("role_blueprism"),
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63O-Tn2zTLTzSW3s2MWqJhz1P-FeyeGI5IqrMgg54cg&s=10"
}
    
    
    
  ];

const TeachersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 px-8 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-visible">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          subtitle={t('mentors_subtitle')} 
          title={t('mentors_title')} 
          centered 
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-24 mt-24">
          {teachers.map((mentor, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8">
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative w-full h-full bg-slate-100 dark:bg-[#0a0f1d] rounded-full border border-zinc-300 dark:border-zinc-800 border-b-4 border-b-zinc-400 dark:border-b-zinc-600 group-hover:border-cyan-500 group-hover:border-b-cyan-400 transition-all duration-500 shadow-xl overflow-hidden p-1">
                  <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={mentor.img} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-slate-900 dark:text-white font-black uppercase text-[12px] md:text-[14px] tracking-widest group-hover:text-cyan-500 transition-colors duration-300">
                  {mentor.name}
                </h4>
                {/* ২. রোলের টেক্সট অনুবাদ করার জন্য t(mentor.role) ব্যবহার করতে হবে */}
                <p className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-tighter mt-1 h-8">
                  {t(mentor.role)}
                </p>
                
                <div className="flex justify-center mt-5">
                  <div className="h-[1px] w-6 bg-zinc-200 dark:bg-zinc-800 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-700 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
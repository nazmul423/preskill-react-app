
import SectionTitle from '../components/common/SectionTitle';

const TeachersSection = () => {
  // ৮ জন মেন্টরের ডাটা
  const teachers = [
    { name: "Tanvir Ahmed", role: "AI & ML Specialist", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Nusrat Jahan", role: "Cyber Security Lead", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Ariful Islam", role: "Cloud Architect", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Sadia Afrin", role: "UI/UX Design Lead", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Faisal Rahman", role: "DevOps Engineer", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Sumaiya Khan", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Mehidi Hasan", role: "Full Stack Developer", img: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Tasmia Haque", role: "Blockchain Expert", img: "https://randomuser.me/api/portraits/women/4.jpg" }
  ];

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-[#050b1d] via-[#020617] to-[#050b1d]">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          subtitle="Expert Faculty" 
          title="Learn From Industry Mentors" 
          centered 
        />

        {/* গ্রিড কন্টেইনার - এখানে নিশ্চিত করা হয়েছে যাতে ৮টিই দেখায় */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 mt-16">
          {teachers.map((t, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              
              {/* ইমেজ কন্টেইনার */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8">
                {/* হোভার গ্লো ইফেক্ট */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125" />
                
                <div className="relative w-full h-full bg-slate-900 rounded-full border border-white/10 p-1 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl overflow-visible">
                  <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>

              {/* টেক্সট ডিটেইলস */}
              <div className="space-y-2">
                <h4 className="text-white font-black uppercase text-[12px] md:text-[14px] tracking-widest group-hover:text-cyan-400 transition-colors duration-300 min-h-[1.5rem]">
                  {t.name}
                </h4>
                <p className="text-slate-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                  {t.role}
                </p>
                
                {/* ডেকোরেটিভ লাইন */}
                <div className="flex justify-center mt-4">
                  <div className="h-[2px] w-4 bg-cyan-500/30 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-500 rounded-full" />
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
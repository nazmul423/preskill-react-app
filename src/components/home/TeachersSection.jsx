import SectionTitle from '../common/SectionTitle';

const TeachersSection = () => {
  const teachers = [
    { name: "Dr. Alex Rivera", role: "AI Research Lead" },
    { name: "Sarah Jenkins", role: "Robotics Expert" },
    { name: "Marcus Thorne", role: "Hardware Architect" },
    { name: "Elena Rossi", role: "Data Scientist" },
  ];

  return (
    <section className="py-24 px-8 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Our Faculty" title="Learn From The Best" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
          {teachers.map((t, i) => (
            <div key={i} className="text-center group">
              <div className="w-28 h-28 bg-slate-800 rounded-full mx-auto mb-6 border-2 border-transparent group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all overflow-hidden" />
              <h4 className="text-white font-bold uppercase text-xs tracking-widest">{t.name}</h4>
              <p className="text-slate-500 text-[10px] mt-1 font-bold uppercase">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
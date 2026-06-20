import SectionTitle from "../../components/common/SectionTitle";

const OngoingProjects = () => {
  const projects = [
    { name: "National Canal Digging Program 2.0", region: "All 64 Districts", progress: 60 },
    { name: "River-Canal Connectivity Project", region: "Padma-Meghna Basins", progress: 40 },
    { name: "Farmer's Lifeline Irrigation", region: "Northern Bengal", progress: 85 },
  ];

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto">
      <SectionTitle subtitle="Self-Reliant Mission" title="Ongoing Transformation" centered />
      <div className="space-y-8 mt-12">
        {projects.map((p, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-zinc-900/50 border border-white/5 shadow-2xl">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-slate-900 dark:text-white font-black text-xl uppercase italic">{p.name}</h3>
                <p className="text-blue-500 font-bold text-[10px] mt-1 uppercase tracking-widest">{p.region}</p>
              </div>
              <span className="text-slate-900 dark:text-white font-black text-3xl">{p.progress}%</span>
            </div>
            <div className="w-full h-4 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden p-1">
              <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000" style={{ width: `${p.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
import SectionTitle from "../../components/common/SectionTitle";
const ProjectAnalysis = () => {
  return (
    <div className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <SectionTitle subtitle="Strategic Planning" title="Visionary Data Analysis" />
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-lg">
          Inspired by the vision of a <strong>Self-Reliant Bangladesh</strong>, our analysis focuses on sustainable water table management. We don't just dig; we calculate the future crop yields and ensure zero-cost irrigation for every village.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {["Depth Profiling", "Soil Analysis", "Ecological Impact", "Local Survey"].map(item => (
            <div key={item} className="p-4 border border-slate-200 dark:border-white/5 rounded-xl bg-white dark:bg-zinc-900 font-bold text-xs uppercase tracking-widest text-slate-800 dark:text-white">
               {item}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[400px] bg-slate-100 dark:bg-zinc-800 rounded-[3rem] border-8 border-white dark:border-zinc-900 shadow-2xl flex items-center justify-center italic font-black text-slate-400 uppercase tracking-widest">
         3D Canal Mapping Visualization
      </div>
    </div>
  );
};

export default ProjectAnalysis;
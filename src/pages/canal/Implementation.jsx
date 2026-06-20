import SectionTitle from "../../components/common/SectionTitle";

const Implementation = () => {
  const steps = [
    { no: "01", title: "Grassroots Planning", text: "Directly involving farmers to identify blocked water routes." },
    { no: "02", title: "Voluntary Participation", text: "Reviving the spirit of community digging (Sechasrom)." },
    { no: "03", title: "Modern Dredging", text: "Supplementing manual labor with high-tech dredging gear." },
    { no: "04", title: "Maintenance Cells", text: "Setting up local committees to protect canals from encroachment." },
  ];

  return (
    <div className="py-24 px-8 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Action Plan" title="The Roadmap to Green Bangladesh" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {steps.map((s, i) => (
            <div key={i} className="group p-10 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5 hover:bg-blue-600 transition-all duration-500 shadow-lg">
              <h2 className="text-5xl font-black text-slate-200 dark:text-zinc-800 group-hover:text-white/30 transition-colors mb-6">{s.no}</h2>
              <h4 className="text-slate-900 dark:text-white group-hover:text-white font-black uppercase text-sm mb-4 transition-colors">{s.title}</h4>
              <p className="text-slate-500 dark:text-zinc-400 group-hover:text-white/80 text-xs leading-relaxed transition-colors">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Implementation;
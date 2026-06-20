import SectionTitle from '../../components/common/SectionTitle';
import { Droplets, Lightbulb, Users, BarChart } from 'lucide-react';


const Expertise = () => {
  const expertAreas = [
    { icon: Droplets, title: "Modern Hydrology", desc: "Using tech to restore natural water flow in dried canals." },
    { icon: Users, title: "Mass Mobilization", desc: "Engaging local youth and farmers in voluntary canal restoration." },
    { icon: Lightbulb, title: "Agro-Innovation", desc: "Techniques to turn barren land into fertile crop fields." },
    { icon: BarChart, title: "Economic Impact", desc: "Calculating ROI for small farmers through free irrigation." },
  ];

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto">
      <SectionTitle subtitle="National Vision" title="Our Expertise in Canal Restoration" centered />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {expertAreas.map((area, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 hover:border-blue-500 transition-all shadow-xl">
            <area.icon className="text-blue-500 mb-6" size={36} />
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-sm mb-4 tracking-tighter">{area.title}</h4>
            <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
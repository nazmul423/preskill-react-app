import { Brain, Bot, Cpu, BarChart3, Plane, Zap } from 'lucide-react';

const Features = () => {
  const cards = [
    { icon: Brain, title: "AI Systems", tagline: "Smarter Decisions.", color: "border-purple-500/50" },
    { icon: Bot, title: "Robotics", tagline: "Transforming Tomorrow.", color: "border-blue-500/50" },
    { icon: Cpu, title: "PCB Design", tagline: "Smarter Products.", color: "border-yellow-500/50" },
    { icon: BarChart3, title: "Data Analytics", tagline: "Powerful Insights.", color: "border-pink-500/50" },
    { icon: Zap, title: "Machine Learning", tagline: "Leading Tomorrow.", color: "border-green-500/50" },
    { icon: Plane, title: "ATC Control", tagline: "Safer Skies.", color: "border-cyan-500/50" },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className={`p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 border-b-4 ${c.color} hover:-translate-y-2 transition-all duration-300`}>
            <c.icon className="w-10 h-10 mb-6 text-white" strokeWidth={1.5} />
            <h4 className="text-xs font-black tracking-[0.2em] text-slate-500 mb-2 uppercase">{c.title}</h4>
            <p className="text-xl font-bold text-white tracking-tight">{c.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;